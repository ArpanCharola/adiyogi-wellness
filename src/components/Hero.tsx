import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/images/FeBg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/30 via-deep-purple/20 to-background/70" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="flex justify-center items-center">
          {/* Centered Text and CTA */}
          <div className="text-center space-y-6 max-w-4xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Emotion Aware Therapy{" "}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                AI and ML
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
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

            <p className="text-sm text-white/70 pt-4">
              ✨ No pressure. No medical advice. Just you and AI-powered wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
