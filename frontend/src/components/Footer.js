import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import BrandLogo from "@/components/BrandLogo";

export default function Footer() {
  return (
    <footer data-testid="footer" className="bg-emerald-950 text-white relative overflow-hidden">
      {/* Top accent line */}
      <div className="h-1 bg-gradient-to-r from-orange-600 via-orange-500 to-emerald-700" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <BrandLogo variant="white" className="mb-4" />
            <p className="text-emerald-200 text-sm leading-relaxed mt-4">
              Trusted Partner for bringing Vision to Shelf. GMP & ISO certified third-party
              Ayurvedic and pharmaceutical manufacturer with 25+ years of formulation expertise.
            </p>
            <div className="flex items-center gap-2 mt-6">
              <span className="inline-block px-3 py-1 bg-emerald-900 rounded text-xs font-semibold text-emerald-100 tracking-wider">
                GMP
              </span>
              <span className="inline-block px-3 py-1 bg-emerald-900 rounded text-xs font-semibold text-emerald-100 tracking-wider">
                ISO
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Products", path: "/products" },
                { label: "Blog", path: "/blog" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-emerald-300 hover:text-orange-400 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Product Range
            </h4>
            <ul className="space-y-3">
              {[
                "Capsules & Tablets",
                "Syrups & Liquids",
                "Oils & Ointments",
                "Churnas & Powders",
                "Pain Relief Balms",
                "Inhalers",
              ].map((item) => (
                <li key={item} className="text-emerald-300 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white text-sm tracking-wider uppercase mb-6" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <a
                  href="tel:9328119224"
                  data-testid="footer-phone"
                  className="text-emerald-300 hover:text-white text-sm transition-colors"
                >
                  +91 9328119224
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@hiltonpharmachem.com"
                  data-testid="footer-email"
                  className="text-emerald-300 hover:text-white text-sm transition-colors"
                >
                  info@hiltonpharmachem.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-orange-500 mt-0.5 flex-shrink-0" />
                <div className="text-emerald-300 text-sm">
                  <p className="font-medium text-white text-xs uppercase tracking-wider mb-1">Plant</p>
                  <p>Sidhpur, Patan, Gujarat</p>
                  <p className="font-medium text-white text-xs uppercase tracking-wider mt-3 mb-1">Corporate Office</p>
                  <p>Ahmedabad, Gujarat</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-emerald-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-emerald-400 text-xs" data-testid="footer-copyright">
            &copy; {new Date().getFullYear()} Hilton Pharma Chem. All rights reserved.
          </p>
          <p className="text-emerald-500 text-xs">
            Third-Party Ayurvedic & Pharmaceutical Manufacturing
          </p>
        </div>
      </div>
    </footer>
  );
}
