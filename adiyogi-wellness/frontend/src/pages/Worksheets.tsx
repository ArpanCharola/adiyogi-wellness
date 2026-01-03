import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Download, BookOpen, ArrowLeft, Search, ExternalLink } from 'lucide-react';
import WorksheetDetail from './WorksheetDetail';

gsap.registerPlugin(ScrollTrigger);

interface Ebook {
  id: string;
  title: string;
  slug: string;
  category: string;
  description: string;
  cover_image: string;
  tags: string[];
  featured: boolean;
}

const Worksheets = () => {
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedEbook, setSelectedEbook] = useState<Ebook | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [filteredEbooks, setFilteredEbooks] = useState<Ebook[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEbooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const params = new URLSearchParams({ limit: '100' });
      
      const res = await fetch(`http://127.0.0.1:8000/api/worksheets/ebooks/?${params}`);
      if (!res.ok) throw new Error(`API error: ${res.status}`);
      
      const data = await res.json();
      console.log('📚 Loaded ebooks:', data.slice(0, 3)); // Debug first 3
      setEbooks(data);
      setFilteredEbooks(data);
    } catch (err: any) {
      console.error('❌ API Error:', err);
      setError(err.message || 'Failed to load resources');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchEbooks();
  }, []);

  useEffect(() => {
    let filtered = [...ebooks];
    if (searchQuery.trim()) {
      filtered = filtered.filter(ebook => 
        ebook.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        ebook.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    setFilteredEbooks(filtered);
  }, [ebooks, searchQuery]);

  // Animations
  useEffect(() => {
    gsap.fromTo(containerRef.current, 
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'back.out(1.7)' }
    );
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.ebook-card').forEach((card: any, i: number) => {
        gsap.fromTo(card, 
          { opacity: 0, y: 50, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: i * 0.08,
            ease: 'back.out(1.7)',
            scrollTrigger: {
              trigger: card,
              start: 'top 85%',
              toggleActions: 'play none none reverse'
            }
          }
        );
      });
    });
    return () => ctx.revert();
  }, [filteredEbooks]);

  const handleDownload = async (slug: string, e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const res = await fetch(`http://127.0.0.1:8000/api/worksheets/ebooks/${slug}/download/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' }
      });
      const data = await res.json();
      window.open(`http://127.0.0.1:8000${data.download_url}`, '_blank');
    } catch (error) {
      console.error('Download failed:', error);
    }
  };

  if (selectedEbook) {
    return (
      <WorksheetDetail 
        ebook={selectedEbook} 
        onClose={() => setSelectedEbook(null)}
        onDownload={() => handleDownload(selectedEbook.slug, new MouseEvent('click') as any)}
      />
    );
  }

  return (
    <div ref={containerRef} className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      <Navbar />
      
      {/* Hero */}
      <section className="relative pt-28 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl animate-spin-slow"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-spin-slow" style={{animationDelay: '5s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 mb-12 px-6 py-3 rounded-2xl bg-white/80 backdrop-blur-xl shadow-2xl text-lg font-semibold text-gray-700 hover:bg-white hover:shadow-blue-200 transition-all duration-300 border border-gray-200"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </button>
          
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Free Worksheets
            </h1>
            <p className="text-2xl md:text-4xl font-light text-gray-600 max-w-4xl mx-auto">
              Therapy eBooks & Resources{' '}
              <span className="font-bold text-blue-600 bg-blue-100 px-6 py-3 rounded-2xl shadow-lg">
                {filteredEbooks.length} available
              </span>
            </p>
          </div>
        </div>
      </section>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 -mt-12 relative z-20">
        {/* Search */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="relative group">
            <Search className="absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-focus-within:text-blue-500 transition-colors" />
            <input
              type="text"
              placeholder="Search therapy worksheets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-16 pr-6 py-6 bg-white/70 border-2 border-gray-200 rounded-3xl text-xl placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-blue-500/20 focus:border-transparent shadow-xl transition-all duration-300 hover:shadow-2xl"
            />
          </div>
        </div>

        {/* 4 COLUMN BIGGER CARDS - UPDATED LAYOUT */}
        <section>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-8">
            {filteredEbooks.map((ebook, index) => (
              <Card 
                key={ebook.id} 
                className="ebook-card group h-[540px] shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-4 transition-all duration-500 border-0 overflow-hidden bg-white cursor-pointer hover:bg-white/90 relative"
                onClick={() => setSelectedEbook(ebook)}
              >
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-500 pointer-events-none z-10"></div>
                
                {/* Bigger Image */}
                <div className="h-64 overflow-hidden relative">
                  <img 
                    src={ebook.cover_image || 'https://via.placeholder.com/500x400/6B7280/FFFFFF?text=COVER'}
                    alt={ebook.title}
                    className="w-full h-full object-cover transition-all duration-500 group-hover:scale-105 group-hover:brightness-110" 
                    onError={(e) => {
                      console.log('❌ Image failed:', ebook.cover_image);
                      (e.target as HTMLImageElement).src = 'https://via.placeholder.com/500x400/6B7280/FFFFFF?text=No+Image';
                    }}
                  />
                  <div className="absolute top-4 left-4 z-20">
                    <div className="px-3 py-1.5 bg-white/95 backdrop-blur-xl text-blue-600 shadow-xl rounded-full font-bold text-sm border border-blue-200">
                      {ebook.category}
                    </div>
                  </div>
                  <div className="absolute top-4 right-4 z-20">
                    <div className="p-2 bg-white/95 backdrop-blur-xl rounded-full shadow-xl">
                      <BookOpen className="w-4 h-4 text-blue-600" />
                    </div>
                  </div>
                </div>
                
                {/* Content Area - Better spacing */}
                <CardContent className="p-6 flex flex-col h-[276px]">
                  <div className="flex-grow">
                    <h4 className="font-black text-xl leading-tight mb-3 line-clamp-2 group-hover:text-blue-600 transition-all duration-300">
                      {ebook.title}
                    </h4>
                    <p className="text-gray-600 text-sm line-clamp-3 mb-4 leading-relaxed">
                      {ebook.description}
                    </p>
                    
                    {/* Tags (if available) */}
                    {ebook.tags && ebook.tags.length > 0 && (
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {ebook.tags.slice(0, 2).map((tag, idx) => (
                          <span 
                            key={idx} 
                            className="px-2 py-1 bg-blue-50 text-blue-600 text-xs font-medium rounded-full border border-blue-100"
                          >
                            {tag}
                          </span>
                        ))}
                        {ebook.tags.length > 2 && (
                          <span className="px-2 py-1 bg-gray-100 text-gray-500 text-xs font-medium rounded-full">
                            +{ebook.tags.length - 2}
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                  
                  {/* Button Container - Always visible at bottom */}
                  <div className="mt-auto pt-4 border-t border-gray-100">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs text-gray-500">
                        <ExternalLink className="w-3.5 h-3.5" />
                        <span>Click to preview</span>
                      </div>
                      <Button 
                        size="sm" 
                        className="px-5 h-10 font-bold shadow-lg hover:shadow-purple-500/40 rounded-xl border-2 border-transparent bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-purple-600 hover:to-purple-800 text-white transition-all duration-300 transform hover:scale-105 group/btn"
                        onClick={(e) => handleDownload(ebook.slug, e)}
                      >
                        <Download className="w-4 h-4 mr-2 group-hover/btn:animate-bounce" />
                        Download
                      </Button>
                    </div>
                  </div>
                </CardContent>
                
                {/* Hover indicator */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Card>
            ))}

            {/* Loading State */}
            {loading && (
              <div className="col-span-full flex flex-col items-center justify-center py-32 text-center bg-white/50 rounded-3xl shadow-2xl">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-3xl flex items-center justify-center mb-8 shadow-2xl">
                  <div className="animate-spin rounded-full h-24 w-24 border-4 border-white/30 border-t-white shadow-lg"></div>
                </div>
                <h2 className="text-4xl font-black text-gray-600 mb-4">Loading Worksheets</h2>
                <p className="text-xl text-gray-500 max-w-lg">Discovering your therapy resources...</p>
              </div>
            )}
          </div>

          {error && (
            <div className="col-span-full text-center py-32 mt-20">
              <div className="text-7xl mb-8 text-red-400">⚠️</div>
              <h2 className="text-4xl font-black text-red-600 mb-6">{error}</h2>
              <Button onClick={fetchEbooks} size="lg" className="bg-red-500 hover:bg-red-600 shadow-2xl text-xl px-12 h-16">
                Try Again
              </Button>
            </div>
          )}
          
          {/* Empty state */}
          {!loading && filteredEbooks.length === 0 && searchQuery && (
            <div className="col-span-full text-center py-32">
              <div className="text-7xl mb-8 text-gray-300">🔍</div>
              <h2 className="text-4xl font-black text-gray-500 mb-6">No worksheets found</h2>
              <p className="text-xl text-gray-400 max-w-md mx-auto">
                No results for "<span className="font-semibold text-gray-600">{searchQuery}</span>"
              </p>
            </div>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Worksheets;