import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer data-testid="footer" className="relative overflow-hidden" style={{ background: "#022c22" }}>
      <div className="h-1 bg-gradient-to-r from-[#d4a017] via-[#e8b84b] to-[#064e3b]" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 text-gray-300">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <BrandLogo variant="white" className="mb-4" />
            <p className="text-sm leading-relaxed text-emerald-200/70 mt-4">
              Bringing Your Vision to Shelf, Since 1999. GMP & ISO certified third-party
              Ayurvedic and pharmaceutical manufacturer with 25+ years of formulation expertise.
            </p>
            <div className="flex items-center gap-3 mt-6">
              {["GMP", "ISO", "AYUSH"].map((cert) => (
                <span key={cert} className="px-3 py-1 rounded text-[10px] font-bold tracking-wider text-[#d4a017] border border-[#d4a017]/30 bg-[#d4a017]/5">
                  {cert}
                </span>
              ))}
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { label: "LinkedIn", path: "M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" },
                { label: "Facebook", path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { label: "Twitter", path: "M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" },
              ].map((social) => (
                <a key={social.label} href="#" aria-label={social.label} className="w-9 h-9 rounded-full border border-emerald-700 flex items-center justify-center hover:border-[#d4a017] hover:bg-[#d4a017]/10 transition-all group">
                  <svg className="w-4 h-4 fill-emerald-400 group-hover:fill-[#d4a017] transition-colors" viewBox="0 0 24 24">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-6 font-['Playfair_Display']">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link to={link.path} data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-emerald-300/70 hover:text-[#d4a017] text-sm transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Product Categories */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-6 font-['Playfair_Display']">Product Range</h4>
            <ul className="space-y-3">
              {[
                { label: "Ointments & Creams", path: "/products/ointments-creams-gels" },
                { label: "Syrups & Liquids", path: "/products/syrups-liquids" },
                { label: "Oils", path: "/products/oils" },
                { label: "Tablets & Capsules", path: "/products/tablets-capsules" },
                { label: "Herbal Powders", path: "/products/herbal-powders" },
                { label: "Winter Products", path: "/products/winter-seasonal" },
              ].map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-emerald-300/70 hover:text-[#d4a017] text-sm transition-colors">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-6 font-['Playfair_Display']">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#d4a017] mt-0.5 flex-shrink-0" />
                <a href="tel:9328119224" data-testid="footer-phone" className="text-emerald-300/70 hover:text-white text-sm transition-colors">+91 9328119224</a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#d4a017] mt-0.5 flex-shrink-0" />
                <a href="mailto:info@hiltonpharmachem.com" data-testid="footer-email" className="text-emerald-300/70 hover:text-white text-sm transition-colors">info@hiltonpharmachem.com</a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#d4a017] mt-0.5 flex-shrink-0" />
                <div className="text-emerald-300/70 text-sm">
                  <p className="font-medium text-white text-[10px] uppercase tracking-wider mb-1">Plant</p>
                  <p>Sidhpur, Patan, Gujarat</p>
                  <p className="font-medium text-white text-[10px] uppercase tracking-wider mt-3 mb-1">Corporate Office</p>
                  <p>Ahmedabad, Gujarat</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-emerald-800/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-emerald-500/60 text-xs" data-testid="footer-copyright">
            &copy; {new Date().getFullYear()} Hilton Pharma Chem. All rights reserved.
          </p>
          <p className="text-[#d4a017]/50 text-xs italic font-['Playfair_Display']">
            Bringing Your Vision to Shelf, Since 1999.
          </p>
        </div>
      </div>
    </footer>
  );
}
