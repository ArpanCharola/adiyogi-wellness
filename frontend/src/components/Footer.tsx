const Footer = () => {
  return (
    <footer className="bg-navy text-white py-12">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img 
                src="/assets/images/logoF0.png" 
                alt="Adiyogi Wellness" 
                className="h-12 w-12 object-contain"
              />
              <span className="text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
                Adiyogi Wellness
              </span>
            </div>
            <p className="text-white/70 max-w-md">
              Emotion-aware therapy powered by AI. Your journey to wellness starts here.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a href="#home" className="text-white/70 hover:text-white transition-colors">Home</a>
              <a href="#chat" className="text-white/70 hover:text-white transition-colors">Chat</a>
              <a href="#assessment" className="text-white/70 hover:text-white transition-colors">Assessment</a>
              <a href="#worksheets" className="text-white/70 hover:text-white transition-colors">Worksheets</a>
              <a href="#guided-audio" className="text-white/70 hover:text-white transition-colors">Guided Audio</a>
              <a href="#about" className="text-white/70 hover:text-white transition-colors">About</a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="border-t border-white/10 pt-8 space-y-4">
          <div className="bg-white/5 rounded-lg p-6 border border-white/10">
            <h4 className="font-semibold mb-2 text-cosmic-blue">Important Disclaimer</h4>
            <p className="text-sm text-white/70 leading-relaxed">
              Adiyogi Wellness offers AI-powered self-care support and is not a substitute for professional therapy or medical advice. 
              Our platform does not involve counselors or medical professionals. For urgent mental health needs or clinical conditions, 
              please consult a licensed healthcare provider or contact emergency services immediately.
            </p>
          </div>

          {/* Copyright */}
          <div className="text-center text-sm text-white/50">
            <p>© {new Date().getFullYear()} Adiyogi Wellness. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
