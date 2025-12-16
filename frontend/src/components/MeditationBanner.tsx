import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

const MeditationBanner = () => {
  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: 'url(/assets/images/purpleWave.jpg)' }}
      >
        <div className="absolute inset-0 bg-navy/80" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-4">
            <Sparkles className="w-5 h-5" />
            <span className="text-sm font-medium">Interactive Wellness</span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Meditation Made{" "}
            <span className="bg-gradient-to-r from-cosmic-blue to-white bg-clip-text text-transparent">
              Effortless
            </span>
          </h2>

          <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto">
            Immerse yourself in guided audio experiences and interactive meditation sessions. 
            Our AI adapts to your emotional state, providing personalized wellness support that evolves with you.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button 
              size="lg" 
              className="bg-white text-navy hover:bg-white/90 font-semibold shadow-xl transition-all duration-300"
            >
              Explore Guided Audio
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white bg-transparent text-white hover:bg-white hover:text-navy font-semibold transition-all duration-300"
            >
              Read Recovery Stories
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeditationBanner;
