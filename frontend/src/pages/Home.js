import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, FlaskConical, Users, Factory, ArrowRight, CheckCircle } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1754372069872-3fef8a815c87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmd8ZW58MHx8fHwxNzc1MDUyODU5fDA&ixlib=rb-4.1.0&q=85";
const ABOUT_IMG = "https://images.unsplash.com/photo-1745420052527-a75fcc6aba58?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHw0fHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmd8ZW58MHx8fHwxNzc1MDUyODU5fDA&ixlib=rb-4.1.0&q=85";

const CATEGORIES = [
  {
    title: "Capsules & Tablets",
    desc: "Standardized Ayurvedic and nutraceutical formulations with precise dosing and consistent bioavailability.",
    image: "https://images.pexels.com/photos/11589213/pexels-photo-11589213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Syrups & Liquids",
    desc: "Herbal syrups and liquid formulations manufactured under controlled conditions for stability and efficacy.",
    image: "https://images.pexels.com/photos/10022079/pexels-photo-10022079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Oils & Ointments",
    desc: "Pain relief ointments, therapeutic oils, and balms crafted with our signature no batch-to-batch variation process.",
    image: "https://images.pexels.com/photos/4021768/pexels-photo-4021768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    title: "Churnas & Powders",
    desc: "Traditional Ayurvedic churna and powder formulations processed to maintain herb potency and shelf stability.",
    image: "https://images.unsplash.com/photo-1633509907796-ece8a21bdbcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHw0fHxheXVydmVkaWMlMjBoZXJicyUyMHBvd2RlcnxlbnwwfHx8fDE3NzUwNTI4NjF8MA&ixlib=rb-4.1.0&q=85",
  },
];

const USP_ITEMS = [
  { icon: FlaskConical, value: "300+", label: "Formulations Developed", color: "text-orange-600" },
  { icon: Shield, value: "25+", label: "Years of Legacy", color: "text-emerald-700" },
  { icon: Factory, value: "GMP & ISO", label: "Certified Facility", color: "text-amber-800" },
  { icon: Users, value: "100+", label: "Brand Partners", color: "text-emerald-700" },
];

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section data-testid="hero-section" className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Pharmaceutical manufacturing facility" className="w-full h-full object-cover" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-2xl">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-400 mb-4 block animate-fade-in-up">
              Third-Party Ayurvedic Manufacturing
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight animate-fade-in-up animate-delay-100"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Trusted Partner for bringing Vision to Shelf.
            </h1>
            <p className="mt-6 text-lg text-emerald-100 leading-relaxed max-w-xl animate-fade-in-up animate-delay-200">
              GMP & ISO certified pharmaceutical manufacturing with 25+ years of formulation expertise.
              From concept to market, we deliver consistent quality for domestic and international brands.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              <Link to="/contact">
                <Button
                  data-testid="hero-request-quote-btn"
                  className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-base font-medium rounded-md"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/products">
                <Button
                  data-testid="hero-explore-products-btn"
                  variant="outline"
                  className="border-white/40 text-white hover:bg-white/10 px-8 py-3 text-base font-medium rounded-md"
                >
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* USPs Bento Grid */}
      <section data-testid="usps-section" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-600 mb-2 block">
              Why Hilton Pharma Chem
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Built on Expertise. Driven by Consistency.
            </h2>
            <p className="mt-4 text-base text-stone-600 max-w-2xl mx-auto leading-relaxed">
              Our foundation rests on decades of pharmaceutical formulation experience,
              delivering dependable manufacturing partnerships for brands across markets.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {USP_ITEMS.map((item) => (
              <div
                key={item.label}
                data-testid={`usp-card-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-stone-50 border border-stone-200 rounded-xl p-8 text-center card-hover"
              >
                <item.icon className={`w-8 h-8 ${item.color} mx-auto mb-4`} />
                <div
                  className="text-3xl md:text-4xl font-bold text-emerald-950"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.value}
                </div>
                <p className="mt-2 text-sm text-stone-500 font-medium">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section data-testid="products-grid" className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-600 mb-2 block">
              Product Range
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Comprehensive Manufacturing Capabilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat) => (
              <Link
                to="/products"
                key={cat.title}
                data-testid={`category-card-${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
                className="group bg-white rounded-xl overflow-hidden border border-stone-200 card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3
                    className="text-lg font-semibold text-emerald-900 group-hover:text-orange-600 transition-colors"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-500 leading-relaxed">{cat.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section data-testid="about-teaser" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-600 mb-4 block">
                About Hilton Pharma Chem
              </span>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                From Formulation Expertise to Manufacturing Excellence
              </h2>
              <p className="mt-6 text-base text-stone-600 leading-relaxed">
                Hilton Pharma Chem is an India-based pharmaceutical manufacturing company focused on
                wellness and pain management solutions. We offer third-party and private-label manufacturing
                for domestic and international markets.
              </p>
              <ul className="mt-8 space-y-4">
                {[
                  "Direct manufacturer-to-distributor partnerships",
                  "Customized formulations, packaging, and volumes",
                  "Scalable production for startups to large enterprises",
                  "Plant in Sidhpur, Gujarat with state-of-the-art infrastructure",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-emerald-700 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/about">
                  <Button
                    data-testid="about-learn-more-btn"
                    className="bg-emerald-900 hover:bg-emerald-800 text-white px-6 py-3 rounded-md"
                  >
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={ABOUT_IMG}
                alt="Hilton Pharma Chem manufacturing facility"
                className="w-full rounded-xl shadow-lg"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-900 text-white p-6 rounded-xl shadow-xl hidden lg:block">
                <div className="text-3xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>25+</div>
                <div className="text-sm text-emerald-200">Years of Legacy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-emerald-950 relative grain-overlay">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Bring Your Product Vision to Life?
          </h2>
          <p className="mt-4 text-base text-emerald-200 max-w-2xl mx-auto leading-relaxed">
            Whether you are an established brand or a startup, we provide the manufacturing
            expertise and scalability to help you succeed. Get in touch to discuss your requirements.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                data-testid="cta-contact-btn"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-base font-medium rounded-md"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:9328119224">
              <Button
                data-testid="cta-call-btn"
                variant="outline"
                className="border-emerald-400 text-emerald-100 hover:bg-emerald-900 px-8 py-3 text-base font-medium rounded-md"
              >
                Call +91 9328119224
              </Button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
