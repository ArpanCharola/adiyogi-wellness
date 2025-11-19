import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/images/FeBg.jpg)' }}
      />

      {/* Content */}
      <div className="relative z-10 w-full pt-32 pb-20 px-4 lg:px-8">
        <div className="ml-auto" style={{ maxWidth: '50%' }}>
          {/* Right-aligned Text and CTA */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
              Emotion Aware Therapy{" "}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                AI and ML
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white max-w-2xl drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              Experience instant self-care with personalized wellness and meditation guidance. 
              No counselors, no appointments—just AI-powered support tailored to your emotional journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-cosmic text-white font-semibold shadow-glow hover:shadow-xl transition-all duration-300 text-lg px-8"
              >
                Take Your Free Wellness Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <p className="text-sm text-white pt-4 drop-shadow-[0_2px_6px_rgba(0,0,0,0.8)]">
              ✨ No pressure. No medical advice. Just you and AI-powered wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
