import { useState, useEffect, useRef } from "react";
import { ChevronDown, Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const handleNavigation = (path: string) => {
    setIsOpen(false);
    setActiveDropdown(null);
    navigate(path);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (activeDropdown) {
        const ref = dropdownRefs.current[activeDropdown];
        if (ref && !ref.contains(event.target as Node)) {
          setActiveDropdown(null);
        }
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [activeDropdown]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const dropdownMenus = {
    "getting-started": [
      { label: "Free Assessment", path: "/assessment" },
      { label: "Anxiety Test", path: "/anxiety-test" },
    ],
    topics: [
      { label: "Issues", path: "/issues" },
      { label: "Treatments", path: "/treatments" },
    ],
    interactives: [
      { label: "Guided Audio", path: "/guided-audio" },
      { label: "Recovery Stories", path: "/recovery-stories" },
    ],
  };

  const DropdownMenu = ({ id, label }: { id: string; label: string }) => (
    <div
      ref={(el) => (dropdownRefs.current[id] = el)}
      className="relative"
      onMouseEnter={() => setActiveDropdown(id)}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <button
        className="flex items-center gap-1 text-foreground hover:text-primary transition-all duration-300 font-medium py-2"
      >
        {label}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${
            activeDropdown === id ? "rotate-180" : ""
          }`}
        />
      </button>
      <div
        className={`absolute top-full left-0 mt-1 w-56 bg-popover border border-border rounded-lg shadow-card py-2 z-50 transition-all duration-300 origin-top ${
          activeDropdown === id
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-95 -translate-y-2 pointer-events-none"
        }`}
      >
        {dropdownMenus[id as keyof typeof dropdownMenus].map((item) => (
          <button
            key={item.path}
            onClick={() => handleNavigation(item.path)}
            className="block w-full text-left px-4 py-2.5 hover:bg-muted transition-all duration-200 hover:pl-6"
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm transition-all duration-300">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/assets/images/logoF0.png"
              alt="Adiyogi Wellness"
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
            />
            <span className="text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent">
              Adiyogi Wellness
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              to="/chat"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Chat
            </Link>

            <DropdownMenu id="getting-started" label="Getting Started" />

            <Link
              to="/worksheets"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Worksheets
            </Link>

            <DropdownMenu id="topics" label="Topics" />
            <DropdownMenu id="interactives" label="Interactives" />

            <Link
              to="/contact"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="text-foreground hover:text-primary transition-all duration-300 font-medium relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-all duration-300 hover:rotate-12"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground transition-all duration-300" />
              ) : (
                <Moon className="w-5 h-5 text-foreground transition-all duration-300" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 transition-transform duration-300 hover:scale-110"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-4 space-y-2 border-t border-border">
            <button
              onClick={() => handleNavigation("/")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation("/chat")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Chat
            </button>
            <div className="py-2">
              <div className="font-medium text-muted-foreground text-sm mb-1">
                Getting Started
              </div>
              {dropdownMenus["getting-started"].map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="block w-full text-left py-1.5 pl-4 text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleNavigation("/worksheets")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Worksheets
            </button>
            <div className="py-2">
              <div className="font-medium text-muted-foreground text-sm mb-1">
                Topics
              </div>
              {dropdownMenus["topics"].map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="block w-full text-left py-1.5 pl-4 text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <div className="py-2">
              <div className="font-medium text-muted-foreground text-sm mb-1">
                Interactives
              </div>
              {dropdownMenus["interactives"].map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className="block w-full text-left py-1.5 pl-4 text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
            <button
              onClick={() => handleNavigation("/contact")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </button>
            <button
              onClick={() => handleNavigation("/about")}
              className="block w-full text-left py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </button>

            {/* Mobile Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center gap-2 py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              {theme === "dark" ? (
                <>
                  <Sun className="w-5 h-5" />
                  <span>Light Mode</span>
                </>
              ) : (
                <>
                  <Moon className="w-5 h-5" />
                  <span>Dark Mode</span>
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
