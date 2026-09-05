import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => { setMobileOpen(false); }, [location]);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "navbar-glass navbar-glass-scrolled" : "navbar-glass"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link to="/" data-testid="navbar-logo" className="flex-shrink-0">
            <BrandLogo variant="color" />
          </Link>
          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 font-['DM_Sans'] ${
                  location.pathname === link.path
                    ? "text-[#064e3b] border-b-2 border-[#d4a017] pb-1"
                    : "text-gray-600 hover:text-[#064e3b]"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden lg:block">
              <button data-testid="nav-request-quote-btn" className="btn-gold text-sm">
                Get a Quote
              </button>
            </Link>
            <button
              data-testid="mobile-menu-toggle"
              className="lg:hidden p-2 text-gray-700 hover:text-[#064e3b]"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      {mobileOpen && (
        <div data-testid="mobile-menu" className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-200 shadow-lg animate-fade-in-up" style={{ animationDuration: "0.25s" }}>
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-emerald-50 text-[#064e3b]"
                    : "text-gray-600 hover:bg-gray-50 hover:text-[#064e3b]"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-200">
              <Link to="/contact">
                <button data-testid="mobile-request-quote-btn" className="btn-gold w-full text-sm justify-center">
                  Get a Quote
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
