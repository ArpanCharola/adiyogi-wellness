import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/images/hero-bg.jpg)' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-navy/60 via-deep-purple/50 to-background/90" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto px-4 lg:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Logo */}
          <div className="flex justify-center lg:justify-start">
            <img 
              src="/assets/images/logoF0.png" 
              alt="Adiyogi" 
              className="w-full max-w-md lg:max-w-lg h-auto drop-shadow-2xl animate-fade-in"
            />
          </div>

          {/* Right: Text and CTA */}
          <div className="text-center lg:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Emotion-Aware Therapy,{" "}
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Powered by AI
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-white/90 max-w-2xl">
              Experience instant self-care with personalized wellness and meditation guidance. 
              No counselors, no appointments—just AI-powered support tailored to your emotional journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
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
