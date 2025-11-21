import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import meditateImg from "@/assets/meditate.avif";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="container mx-auto px-4 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          {/* Left Side - Image */}
          <div className="flex justify-center lg:justify-start">
            <div className="relative w-full max-w-md">
              <img 
                src={meditateImg} 
                alt="Meditation" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>

          {/* Right Side - Content */}
          <div className="space-y-6 text-center lg:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              <span className="bg-gradient-cosmic bg-clip-text text-transparent">
                Emotion Aware Therapy System
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0">
              Experience instant self-care with personalized wellness and meditation guidance. 
              No counselors, no appointments—just AI-powered support tailored to your emotional journey.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button 
                size="lg" 
                className="bg-gradient-cosmic text-white font-semibold shadow-glow hover:shadow-xl transition-all duration-300 text-lg px-8"
                onClick={() => navigate("/assessment")}
              >
                Take Your Free Wellness Assessment
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <p className="text-sm text-muted-foreground pt-4">
              ✨ No pressure. No medical advice. Just you and AI-powered wellness.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
