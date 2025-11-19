import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
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

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#chat" className="text-foreground hover:text-primary transition-colors font-medium">
              Chat
            </a>
            
            {/* Getting Started Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("getting-started")}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
              >
                Getting Started
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "getting-started" && (
                <div className="absolute top-full mt-2 w-56 bg-popover border border-border rounded-lg shadow-card py-2 z-50">
                  <a href="#assessment" className="block px-4 py-2 hover:bg-muted transition-colors">
                    Free Assessment
                  </a>
                  <a href="#anxiety-test" className="block px-4 py-2 hover:bg-muted transition-colors">
                    Anxiety Test
                  </a>
                </div>
              )}
            </div>

            <a href="#worksheets" className="text-foreground hover:text-primary transition-colors font-medium">
              Worksheets
            </a>

            {/* Topics Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("topics")}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
              >
                Topics
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "topics" && (
                <div className="absolute top-full mt-2 w-48 bg-popover border border-border rounded-lg shadow-card py-2 z-50">
                  <a href="#issues" className="block px-4 py-2 hover:bg-muted transition-colors">
                    Issues
                  </a>
                  <a href="#treatments" className="block px-4 py-2 hover:bg-muted transition-colors">
                    Treatments
                  </a>
                </div>
              )}
            </div>

            {/* Interactives Dropdown */}
            <div className="relative">
              <button
                onClick={() => toggleDropdown("interactives")}
                className="flex items-center gap-1 text-foreground hover:text-primary transition-colors font-medium"
              >
                Interactives
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === "interactives" && (
                <div className="absolute top-full mt-2 w-56 bg-popover border border-border rounded-lg shadow-card py-2 z-50">
                  <a href="#guided-audio" className="block px-4 py-2 hover:bg-muted transition-colors">
                    Guided Audio
                  </a>
                  <a href="#recovery-stories" className="block px-4 py-2 hover:bg-muted transition-colors">
                    Recovery Stories
                  </a>
                </div>
              )}
            </div>

            <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden py-4 space-y-2 border-t border-border">
            <a href="#home" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              Home
            </a>
            <a href="#chat" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              Chat
            </a>
            <div className="py-2">
              <div className="font-medium text-muted-foreground text-sm mb-1">Getting Started</div>
              <a href="#assessment" className="block py-1.5 pl-4 text-foreground hover:text-primary transition-colors">
                Free Assessment
              </a>
              <a href="#anxiety-test" className="block py-1.5 pl-4 text-foreground hover:text-primary transition-colors">
                Anxiety Test
              </a>
            </div>
            <a href="#worksheets" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              Worksheets
            </a>
            <div className="py-2">
              <div className="font-medium text-muted-foreground text-sm mb-1">Topics</div>
              <a href="#issues" className="block py-1.5 pl-4 text-foreground hover:text-primary transition-colors">
                Issues
              </a>
              <a href="#treatments" className="block py-1.5 pl-4 text-foreground hover:text-primary transition-colors">
                Treatments
              </a>
            </div>
            <div className="py-2">
              <div className="font-medium text-muted-foreground text-sm mb-1">Interactives</div>
              <a href="#guided-audio" className="block py-1.5 pl-4 text-foreground hover:text-primary transition-colors">
                Guided Audio
              </a>
              <a href="#recovery-stories" className="block py-1.5 pl-4 text-foreground hover:text-primary transition-colors">
                Recovery Stories
              </a>
            </div>
            <a href="#contact" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              Contact
            </a>
            <a href="#about" className="block py-2 text-foreground hover:text-primary transition-colors font-medium">
              About
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
