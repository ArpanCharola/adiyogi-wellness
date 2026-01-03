import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { Button } from '@/components/ui/button';
import { Download, BookOpen, X, ArrowLeft, Tag, Clock } from 'lucide-react';

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

interface WorksheetDetailProps {
  ebook: Ebook;
  onClose: () => void;
  onDownload: () => void;
}

const WorksheetDetail = ({ ebook, onClose, onDownload }: WorksheetDetailProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const backdropRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const modal = modalRef.current;
    const backdrop = backdropRef.current;
    
    if (!modal || !backdrop) return;

    gsap.fromTo(backdrop, { opacity: 0 }, { opacity: 1, duration: 0.3 });
    gsap.fromTo(modal, 
      { scale: 0.8, opacity: 0, y: 50 }, 
      { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.7)' }
    );

    return () => {
      gsap.to([backdrop, modal], { opacity: 0, scale: 0.8, duration: 0.3 });
    };
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === backdropRef.current) onClose();
  };

  return (
    <div 
      ref={backdropRef}
      className="fixed inset-0 z-[9999] bg-black/60 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
      onClick={handleBackdropClick}
    >
      <div 
        ref={modalRef}
        className="w-full max-w-6xl max-h-[95vh] overflow-hidden bg-white/90 backdrop-blur-2xl rounded-3xl shadow-2xl border border-white/20"
      >
        {/* Header */}
        <div className="sticky top-0 z-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-t-3xl shadow-2xl">
          <div className="flex items-center justify-between">
            <Button 
              variant="ghost" 
              size="sm"
              className="h-12 w-12 rounded-2xl hover:bg-white/20 p-0 backdrop-blur-xl"
              onClick={onClose}
            >
              <X className="w-6 h-6" />
            </Button>
            
            <div className="flex-1 text-center">
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
                <span className="text-sm font-medium">Worksheet Preview</span>
              </div>
            </div>
            
            <Button 
              size="lg"
              className="h-14 px-8 bg-white/20 hover:bg-white/30 backdrop-blur-xl shadow-2xl font-bold text-lg rounded-2xl border-white/30"
              onClick={onDownload}
            >
              <Download className="w-6 h-6 mr-2" />
              Download PDF
            </Button>
          </div>
        </div>

        {/* Content - NO SCROLL */}
        <div className="grid lg:grid-cols-2 h-[70vh] overflow-hidden">
          {/* Left: Image */}
          <div className="relative h-full bg-gradient-to-br from-gray-50 to-blue-50">
            <img 
              src={ebook.cover_image || 'https://via.placeholder.com/600x700/6B7280/FFFFFF?text=COVER'}
              alt={ebook.title}
              className="w-full h-full object-cover brightness-110 hover:scale-105 transition-transform duration-500"
              onError={(e) => {
                console.log('Image error:', ebook.cover_image);
                (e.target as HTMLImageElement).src = 'https://via.placeholder.com/600x700/6B7280/FFFFFF?text=No+Image';
              }}
            />
            <div className="absolute top-8 left-8">
              <div className="px-6 py-3 bg-white/90 backdrop-blur-xl text-blue-600 shadow-2xl rounded-2xl font-bold text-xl border-2 border-blue-200">
                {ebook.category}
              </div>
            </div>
          </div>

          {/* Right: Content */}
          <div className="p-12 flex flex-col justify-center">
            <h1 className="text-4xl lg:text-5xl font-black bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 bg-clip-text text-transparent leading-tight mb-8">
              {ebook.title}
            </h1>
            
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-gray-200 shadow-xl mb-8">
              <p className="text-xl leading-relaxed text-gray-700 mb-8">
                {ebook.description}
              </p>
              
              <div className="flex items-center gap-8 text-lg mb-10">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-8 h-8 text-blue-600" />
                  <div>
                    <div className="font-bold text-gray-800">Interactive PDF</div>
                    <div className="text-sm text-gray-500">High Quality</div>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-8 h-8 text-purple-600" />
                  <div>
                    <div className="font-bold text-gray-800">10-20 min</div>
                    <div className="text-sm text-gray-500">Completion time</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tags */}
            {ebook.tags && ebook.tags.length > 0 && (
              <div className="mb-12">
                <div className="flex items-center gap-3 mb-6">
                  <Tag className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-bold text-gray-800">Topics Covered</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {ebook.tags.slice(0, 6).map((tag, i) => (
                    <div 
                      key={i}
                      className="px-5 py-3 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 font-semibold rounded-2xl shadow-lg hover:shadow-blue-300 transition-all duration-300 border border-blue-200"
                    >
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <Button 
                size="lg"
                className="flex-1 h-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 hover:shadow-blue-500/50 shadow-2xl font-black text-xl rounded-2xl text-white hover:from-blue-700 hover:to-indigo-500"
                onClick={onDownload}
              >
                <Download className="w-7 h-7 mr-3" />
                Download Free PDF
              </Button>
              <Button 
                variant="outline"
                size="lg"
                className="h-16 px-8 font-bold text-xl border-2 border-gray-300 hover:bg-white hover:shadow-2xl rounded-2xl"
                onClick={onClose}
              >
                <ArrowLeft className="w-6 h-6 mr-2" />
                Browse More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorksheetDetail;
