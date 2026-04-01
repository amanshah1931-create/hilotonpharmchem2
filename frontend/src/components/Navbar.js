import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
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

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      data-testid="navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-stone-200"
          : "bg-white/70 backdrop-blur-md"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" data-testid="navbar-logo" className="flex-shrink-0">
            <BrandLogo variant="color" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8" data-testid="desktop-nav">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  location.pathname === link.path
                    ? "text-emerald-900 border-b-2 border-orange-600 pb-1"
                    : "text-stone-600 hover:text-emerald-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link to="/contact" className="hidden lg:block">
              <Button
                data-testid="nav-request-quote-btn"
                className="bg-emerald-900 hover:bg-emerald-800 text-white rounded-md px-5 py-2.5 text-sm font-medium"
              >
                Request Quote
              </Button>
            </Link>

            <a
              href="tel:9328119224"
              className="hidden md:flex lg:hidden items-center gap-2 text-sm text-emerald-900 font-medium"
              data-testid="nav-phone"
            >
              <Phone className="w-4 h-4" />
              9328119224
            </a>

            <button
              data-testid="mobile-menu-toggle"
              className="lg:hidden p-2 text-stone-700 hover:text-emerald-900"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div data-testid="mobile-menu" className="lg:hidden bg-white border-t border-stone-200 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                data-testid={`mobile-nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "bg-emerald-50 text-emerald-900"
                    : "text-stone-600 hover:bg-stone-50 hover:text-emerald-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-stone-200">
              <Link to="/contact">
                <Button
                  data-testid="mobile-request-quote-btn"
                  className="w-full bg-emerald-900 hover:bg-emerald-800 text-white"
                >
                  Request Quote
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
