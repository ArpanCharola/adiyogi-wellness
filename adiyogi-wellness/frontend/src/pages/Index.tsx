import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import MeditationBanner from "@/components/MeditationBanner";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <MeditationBanner />
      <HowItWorks />
      <Footer />
    </div>
  );
};

export default Index;
