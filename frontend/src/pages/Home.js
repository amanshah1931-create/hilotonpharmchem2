import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Shield, FlaskConical, Users, Factory, ArrowRight, CheckCircle,
  MessageSquare, ClipboardList, IndianRupee, ThumbsUp, Package,
  Palette, Settings, SearchCheck, Truck, FileCheck
} from "lucide-react";

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
  { icon: FlaskConical, value: "300+", label: "Formulations Developed", color: "text-orange-600", bg: "bg-orange-50" },
  { icon: Shield, value: "25+", label: "Years of Legacy", color: "text-emerald-700", bg: "bg-emerald-50" },
  { icon: Factory, value: "GMP & ISO", label: "Certified Facility", color: "text-amber-800", bg: "bg-amber-50" },
  { icon: Users, value: "100+", label: "Brand Partners", color: "text-emerald-700", bg: "bg-emerald-50" },
];

const PROCESS_STEPS = [
  { icon: MessageSquare, title: "Enquiry", desc: "You reach out with your product vision and requirements" },
  { icon: ClipboardList, title: "Requirement Analysis", desc: "We study your needs, target market, and specifications" },
  { icon: IndianRupee, title: "Costing Shared", desc: "Transparent pricing with detailed cost breakdown" },
  { icon: ThumbsUp, title: "Costing Approved", desc: "Mutual agreement on pricing and terms of partnership" },
  { icon: Package, title: "Sample Development", desc: "We develop and share product samples for evaluation" },
  { icon: FileCheck, title: "Sample Approved", desc: "You validate quality, efficacy, and product specs" },
  { icon: Palette, title: "Design & Approval", desc: "Packaging design, labelling, and branding finalized" },
  { icon: Settings, title: "Manufacturing", desc: "Full-scale production at our GMP-certified facility" },
  { icon: SearchCheck, title: "Quality Check", desc: "Rigorous QC testing across all batch parameters" },
  { icon: Truck, title: "Dispatch", desc: "Timely delivery to your warehouse or distribution network" },
];

const DecorDots = ({ className }) => (
  <svg className={className} width="120" height="120" viewBox="0 0 120 120" fill="none">
    {[...Array(5)].map((_, r) =>
      [...Array(5)].map((_, c) => (
        <circle key={`${r}-${c}`} cx={12 + c * 24} cy={12 + r * 24} r="3" fill="currentColor" opacity="0.15" />
      ))
    )}
  </svg>
);

const LeafAccent = ({ className }) => (
  <svg className={className} width="200" height="200" viewBox="0 0 200 200" fill="none">
    <path d="M100 10C100 10 30 60 30 120C30 160 60 190 100 190C140 190 170 160 170 120C170 60 100 10 100 10Z" stroke="currentColor" strokeWidth="1.5" opacity="0.08" fill="none" />
    <path d="M100 40C100 40 55 75 55 120C55 148 74 170 100 170C126 170 145 148 145 120C145 75 100 40 100 40Z" stroke="currentColor" strokeWidth="1" opacity="0.05" fill="none" />
  </svg>
);

export default function Home() {
  return (
    <div data-testid="home-page">
      {/* Hero Section */}
      <section data-testid="hero-section" className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Pharmaceutical manufacturing facility" className="w-full h-full object-cover scale-105" />
          <div className="hero-overlay absolute inset-0" />
        </div>
        {/* Decorative floating elements */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-orange-500 animate-pulse" />
              <span className="text-xs tracking-wide uppercase font-semibold text-orange-300">
                Third-Party Ayurvedic Manufacturing
              </span>
            </div>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] animate-fade-in-up animate-delay-100"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Trusted Partner for bringing{" "}
              <span className="relative inline-block">
                <span className="relative z-10">Vision to Shelf.</span>
                <span className="absolute bottom-1 left-0 w-full h-3 bg-orange-600/40 -skew-x-3 z-0" />
              </span>
            </h1>
            <p className="mt-6 text-lg text-emerald-100/90 leading-relaxed max-w-xl animate-fade-in-up animate-delay-200">
              GMP & ISO certified pharmaceutical manufacturing with 25+ years of formulation expertise.
              From concept to market, we deliver consistent quality for domestic and international brands.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              <Link to="/contact">
                <Button
                  data-testid="hero-request-quote-btn"
                  className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 text-base font-medium rounded-full shadow-lg shadow-orange-600/30 hover:shadow-orange-500/40 transition-all"
                >
                  Request a Quote
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
              <Link to="/products">
                <Button
                  data-testid="hero-explore-products-btn"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-3.5 text-base font-medium rounded-full backdrop-blur-sm"
                >
                  Explore Products
                </Button>
              </Link>
            </div>
          </div>
          {/* Floating stat badges on hero */}
          <div className="hidden xl:block absolute right-16 top-1/2 -translate-y-1/2 space-y-4">
            {[
              { val: "300+", lbl: "Formulations" },
              { val: "25+", lbl: "Years Legacy" },
              { val: "GMP", lbl: "Certified" },
            ].map((b) => (
              <div key={b.val} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-center hero-float-badge">
                <div className="text-2xl font-bold text-white" style={{ fontFamily: "'Outfit', sans-serif" }}>{b.val}</div>
                <div className="text-xs text-emerald-200 font-medium">{b.lbl}</div>
              </div>
            ))}
          </div>
        </div>
        {/* Bottom wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 40L48 35C96 30 192 20 288 18C384 15 480 20 576 28C672 35 768 45 864 48C960 50 1056 45 1152 38C1248 30 1344 20 1392 15L1440 10V80H1392C1344 80 1248 80 1152 80C1056 80 960 80 864 80C768 80 672 80 576 80C480 80 384 80 288 80C192 80 96 80 48 80H0V40Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* USPs Bento Grid */}
      <section data-testid="usps-section" className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <DecorDots className="absolute top-8 left-8 text-emerald-900 hidden lg:block" />
        <DecorDots className="absolute bottom-8 right-8 text-orange-600 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-600 mb-3 block">
              Why Hilton Pharma Chem
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Built on Expertise. Driven by Consistency.
            </h2>
            <p className="mt-4 text-base text-stone-500 max-w-2xl mx-auto leading-relaxed">
              Our foundation rests on decades of pharmaceutical formulation experience,
              delivering dependable manufacturing partnerships for brands across markets.
            </p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {USP_ITEMS.map((item, idx) => (
              <div
                key={item.label}
                data-testid={`usp-card-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="group relative bg-white border border-stone-200 rounded-2xl p-8 text-center card-hover overflow-hidden"
              >
                {/* Accent corner */}
                <div className={`absolute top-0 right-0 w-20 h-20 ${item.bg} rounded-bl-[3rem] -mr-1 -mt-1 transition-all group-hover:w-24 group-hover:h-24`} />
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${item.bg} flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className={`w-7 h-7 ${item.color}`} />
                  </div>
                  <div
                    className="text-3xl md:text-4xl font-bold text-emerald-950"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.value}
                  </div>
                  <p className="mt-2 text-sm text-stone-500 font-medium">{item.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section data-testid="products-grid" className="py-20 lg:py-28 bg-stone-50 relative">
        <LeafAccent className="absolute -top-10 -right-10 text-emerald-800 hidden lg:block" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-600 mb-3 block">
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
                className="group bg-white rounded-2xl overflow-hidden border border-stone-200 card-hover"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={cat.image}
                    alt={cat.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6">
                  <h3
                    className="text-lg font-semibold text-emerald-900 group-hover:text-orange-600 transition-colors"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {cat.title}
                  </h3>
                  <p className="mt-2 text-sm text-stone-500 leading-relaxed">{cat.desc}</p>
                  <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-emerald-800 group-hover:text-orange-600 transition-colors">
                    Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section data-testid="process-section" className="py-20 lg:py-28 bg-white relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 opacity-[0.02]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #064e3b 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <LeafAccent className="absolute -bottom-20 -left-20 text-emerald-800 hidden lg:block rotate-45" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-600 mb-3 block">
              How We Work
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              From Enquiry to Dispatch
            </h2>
            <p className="mt-4 text-base text-stone-500 max-w-2xl mx-auto leading-relaxed">
              A transparent, structured process that ensures quality at every stage
              and keeps you informed throughout your manufacturing journey.
            </p>
          </div>

          {/* Desktop Process Timeline */}
          <div className="hidden lg:block">
            {/* Top Row: Steps 1-5 */}
            <div className="relative">
              {/* Connecting line */}
              <div className="absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-emerald-300 via-orange-400 to-emerald-300 opacity-40" />
              <div className="grid grid-cols-5 gap-6">
                {PROCESS_STEPS.slice(0, 5).map((step, idx) => (
                  <div key={step.title} className="relative group">
                    <div className="flex flex-col items-center text-center">
                      <div className="relative z-10 w-[72px] h-[72px] rounded-2xl bg-emerald-900 flex items-center justify-center shadow-lg shadow-emerald-900/20 group-hover:shadow-emerald-900/40 group-hover:scale-110 transition-all duration-300">
                        <step.icon className="w-7 h-7 text-white" />
                        <span className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-orange-600 text-white text-xs font-bold flex items-center justify-center shadow-md">
                          {idx + 1}
                        </span>
                      </div>
                      <h4
                        className="mt-5 text-sm font-semibold text-emerald-950"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {step.title}
                      </h4>
                      <p className="mt-2 text-xs text-stone-400 leading-relaxed max-w-[160px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Arrow connector between rows */}
            <div className="flex justify-end pr-[10%] my-6">
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-orange-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 text-orange-500 rotate-90" />
              </div>
            </div>

            {/* Bottom Row: Steps 6-10 (reversed) */}
            <div className="relative">
              <div className="absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-l from-emerald-300 via-orange-400 to-emerald-300 opacity-40" />
              <div className="grid grid-cols-5 gap-6 direction-rtl">
                {PROCESS_STEPS.slice(5, 10).reverse().map((step, idx) => (
                  <div key={step.title} className="relative group direction-ltr">
                    <div className="flex flex-col items-center text-center">
                      <div className={`relative z-10 w-[72px] h-[72px] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 ${
                        idx === 0 ? "bg-orange-600 shadow-orange-600/20 group-hover:shadow-orange-600/40" : "bg-emerald-900 shadow-emerald-900/20 group-hover:shadow-emerald-900/40"
                      }`}>
                        <step.icon className="w-7 h-7 text-white" />
                        <span className={`absolute -top-2 -right-2 w-7 h-7 rounded-full text-white text-xs font-bold flex items-center justify-center shadow-md ${
                          idx === 0 ? "bg-emerald-900" : "bg-orange-600"
                        }`}>
                          {10 - idx}
                        </span>
                      </div>
                      <h4
                        className="mt-5 text-sm font-semibold text-emerald-950"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {step.title}
                      </h4>
                      <p className="mt-2 text-xs text-stone-400 leading-relaxed max-w-[160px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Process Timeline */}
          <div className="lg:hidden">
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-400 via-orange-400 to-emerald-400 opacity-30" />
              <div className="space-y-8">
                {PROCESS_STEPS.map((step, idx) => (
                  <div key={step.title} className="relative flex items-start gap-5 pl-2" data-testid={`process-step-${idx + 1}`}>
                    <div className="relative z-10 flex-shrink-0">
                      <div className={`w-14 h-14 rounded-xl flex items-center justify-center shadow-md ${
                        idx === 9 ? "bg-orange-600" : "bg-emerald-900"
                      }`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="absolute -top-1.5 -right-1.5 w-6 h-6 rounded-full bg-orange-600 text-white text-[10px] font-bold flex items-center justify-center shadow">
                        {idx + 1}
                      </span>
                    </div>
                    <div className="pt-2">
                      <h4
                        className="text-base font-semibold text-emerald-950"
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {step.title}
                      </h4>
                      <p className="mt-1 text-sm text-stone-500 leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Teaser */}
      <section data-testid="about-teaser" className="py-20 lg:py-28 bg-stone-50 relative overflow-hidden">
        <DecorDots className="absolute top-12 right-12 text-emerald-900 hidden lg:block" />
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
                    <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle className="w-3.5 h-3.5 text-emerald-700" />
                    </div>
                    <span className="text-stone-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-10">
                <Link to="/about">
                  <Button
                    data-testid="about-learn-more-btn"
                    className="bg-emerald-900 hover:bg-emerald-800 text-white px-6 py-3 rounded-full shadow-lg shadow-emerald-900/20"
                  >
                    Learn More About Us
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="relative">
              {/* Decorative frame behind image */}
              <div className="absolute -inset-4 bg-gradient-to-br from-emerald-100 to-orange-50 rounded-3xl -rotate-2 hidden lg:block" />
              <img
                src={ABOUT_IMG}
                alt="Hilton Pharma Chem manufacturing facility"
                className="relative w-full rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-emerald-900 text-white p-6 rounded-2xl shadow-xl hidden lg:flex flex-col items-center">
                <div className="text-3xl font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>25+</div>
                <div className="text-sm text-emerald-200">Years of Legacy</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-orange-600 text-white px-4 py-2 rounded-xl shadow-lg hidden lg:block">
                <div className="text-lg font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>300+</div>
                <div className="text-[10px] text-orange-100 font-medium">Formulations</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-24 bg-emerald-950 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-800/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-600/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 grain-overlay" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
            <span className="text-xs tracking-wide uppercase font-semibold text-orange-300">Start Your Journey</span>
          </div>
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Ready to Bring Your Product Vision to Life?
          </h2>
          <p className="mt-4 text-base text-emerald-200/80 max-w-2xl mx-auto leading-relaxed">
            Whether you are an established brand or a startup, we provide the manufacturing
            expertise and scalability to help you succeed. Get in touch to discuss your requirements.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button
                data-testid="cta-contact-btn"
                className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 text-base font-medium rounded-full shadow-lg shadow-orange-600/30"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
            <a href="tel:9328119224">
              <Button
                data-testid="cta-call-btn"
                variant="outline"
                className="border-emerald-400/40 text-emerald-100 hover:bg-emerald-800/50 px-8 py-3.5 text-base font-medium rounded-full"
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
