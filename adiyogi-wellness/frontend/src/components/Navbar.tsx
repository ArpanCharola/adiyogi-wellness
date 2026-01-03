import { useState } from "react";
import { ChevronDown, Menu, X, Moon, Sun, User, LogOut } from "lucide-react";
import { useTheme } from "next-themes";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/context/AuthContext";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { theme, setTheme } = useTheme();
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo (click -> home) */}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="flex items-center gap-3 group"
          >
            <img
              src="/assets/images/logoF0.png"
              alt="Adiyogi Wellness"
              className="h-12 w-12 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-cosmic bg-clip-text text-transparent group-hover:opacity-90 transition-opacity">
              Adiyogi Wellness
            </span>
          </button>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            <Link
              to="/"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>

            <Link
              to="/chat"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Chat
            </Link>

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
                  <Link
                    to="/assessment"
                    className="block px-4 py-2 hover:bg-muted transition-colors"
                  >
                    Free Assessment
                  </Link>
                  <a
                    href="#anxiety-test"
                    className="block px-4 py-2 hover:bg-muted transition-colors"
                  >
                    Anxiety Test
                  </a>
                </div>
              )}
            </div>

            {/* Worksheets */}
            <Link
              to="/worksheets"
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              Worksheets
            </Link>

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
                  <Link
                    to="/issues"
                    className="block px-4 py-2 hover:bg-muted transition-colors"
                  >
                    Issues
                  </Link>
                  <Link
                    to="/treatments"
                    className="block px-4 py-2 hover:bg-muted transition-colors"
                  >
                    Treatments
                  </Link>
                </div>
              )}
            </div>

            {/* Auth Section */}
            {isAuthenticated ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="relative h-10 w-10 rounded-full">
                    <Avatar className="h-10 w-10">
                      <AvatarImage src={user?.profile_photo} alt={user?.username} />
                      <AvatarFallback>{user?.first_name?.[0]}{user?.last_name?.[0]}</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                  <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                      <p className="text-sm font-medium leading-none">{user?.first_name} {user?.last_name}</p>
                      <p className="text-xs leading-none text-muted-foreground">{user?.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={() => navigate("/profile")}>
                    <User className="mr-2 h-4 w-4" />
                    <span>Profile</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={logout}>
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Log out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <div className="flex items-center gap-4">
                <Link to="/login" className="text-foreground hover:text-primary transition-colors font-medium">
                  Login
                </Link>
                <Button onClick={() => navigate("/signup")}>Sign Up</Button>
              </div>
            )}

            {/* Dark Mode Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg hover:bg-muted transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-foreground" />
              ) : (
                <Moon className="w-5 h-5 text-foreground" />
              )}
            </button>
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
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/chat"
              onClick={closeMobileMenu}
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Chat
            </Link>

            <div className="py-2">
              <div className="font-medium text-muted-foreground text-sm mb-1">
                Getting Started
              </div>
              <Link
                to="/assessment"
                onClick={closeMobileMenu}
                className="block py-1.5 pl-4 text-foreground hover:text-primary transition-colors"
              >
                Free Assessment
              </Link>
              <a
                href="#anxiety-test"
                className="block py-1.5 pl-4 text-foreground hover:text-primary transition-colors"
              >
                Anxiety Test
              </a>
            </div>

            {/* Worksheets - NOW A REAL ROUTE */}
            <Link
              to="/worksheets"
              onClick={closeMobileMenu}
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Worksheets
            </Link>

            <div className="py-2">
              <div className="font-medium text-muted-foreground text-sm mb-1">
                Topics
              </div>
              <Link
                to="/issues"
                onClick={closeMobileMenu}
                className="block py-1.5 pl-4 text-foreground hover:text-primary transition-colors"
              >
                Issues
              </Link>
              <Link
                to="/treatments"
                onClick={closeMobileMenu}
                className="block py-1.5 pl-4 text-foreground hover:text-primary transition-colors"
              >
                Treatments
              </Link>
            </div>

            <div className="py-2">
              <div className="font-medium text-muted-foreground text-sm mb-1">
                Interactives
              </div>
              <a
                href="#guided-audio"
                className="block py-1.5 pl-4 text-foreground hover:text-primary transition-colors"
              >
                Guided Audio
              </a>
              <a
                href="#recovery-stories"
                className="block py-1.5 pl-4 text-foreground hover:text-primary transition-colors"
              >
                Recovery Stories
              </a>
            </div>

            <a
              href="#contact"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </a>
            <a
              href="#about"
              className="block py-2 text-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </a>

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
        )}
      </div>
    </nav>
  );
};

export default Navbar;
