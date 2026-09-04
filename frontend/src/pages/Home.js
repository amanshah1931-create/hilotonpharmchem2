import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  Shield, FlaskConical, Users, Factory, ArrowRight, CheckCircle,
  MessageSquare, ClipboardList, IndianRupee, ThumbsUp, Package,
  Palette, Settings, SearchCheck, Truck, FileCheck,
  Repeat, Beaker, TrendingUp, Rocket, ChevronLeft, ChevronRight
} from "lucide-react";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import TypewriterText from "@/components/TypewriterText";
import ParticleCanvas from "@/components/ParticleCanvas";
import SEO from "@/components/SEO";

const HERO_BG = "/images/facility/mixing-tanks.jpg";
const ABOUT_IMG = "/images/facility/sachet-packing.jpg";
const GALLERY_IMAGES = [
  { src: "/images/facility/filling-line.jpg", label: "PET Bottle Filling Line" },
  { src: "/images/facility/capping-line.jpg", label: "Automatic Capping Station" },
  { src: "/images/facility/mixing-tanks.jpg", label: "Jacketed Mixing Vessels" },
  { src: "/images/facility/sachet-packing.jpg", label: "Sachet & Strip Packing" },
];

const CATEGORIES = [
  { title: "Ointments & Creams", slug: "ointments-creams-gels", desc: "Pain relief ointments, therapeutic creams, medicated gels, and oral care products.", image: "https://images.pexels.com/photos/4021768/pexels-photo-4021768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { title: "Syrups & Liquids", slug: "syrups-liquids", desc: "Ayurvedic syrups, health tonics, herbal juices, and pediatric liquid formulations.", image: "https://images.pexels.com/photos/10022079/pexels-photo-10022079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
  { title: "Oils", slug: "oils", desc: "Pain relief oils, therapeutic massage oils, hair care oils, and cold-pressed single-herb oils.", image: "https://images.unsplash.com/photo-1635166304271-04931640a450?crop=entropy&cs=srgb&fm=jpg&ixlib=rb-4.1.0&q=85" },
  { title: "Tablets & Capsules", slug: "tablets-capsules", desc: "Ayurvedic tablets, herbal capsules, and standardized single-herb supplements.", image: "https://images.pexels.com/photos/11589213/pexels-photo-11589213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" },
];

const STATS = [
  { icon: Shield, value: 25, suffix: "+", label: "Years of Experience" },
  { icon: FlaskConical, value: 500, suffix: "+", label: "Products Manufactured" },
  { icon: Users, value: 50, suffix: "+", label: "Brand Partners" },
  { icon: Factory, value: 0, suffix: "", label: "GMP & ISO Certified", display: "GMP & ISO" },
];

const PROCESS_STEPS = [
  { icon: MessageSquare, title: "Enquiry" },
  { icon: ClipboardList, title: "Requirement Analysis" },
  { icon: IndianRupee, title: "Costing Shared" },
  { icon: ThumbsUp, title: "Costing Approved" },
  { icon: Package, title: "Sample Development" },
  { icon: FileCheck, title: "Sample Approved" },
  { icon: Palette, title: "Design & Approval" },
  { icon: Settings, title: "Manufacturing" },
  { icon: SearchCheck, title: "Quality Check" },
  { icon: Truck, title: "Dispatch" },
];

const WaveDivider = ({ color = "#ffffff", flip = false }) => (
  <div className={`w-full overflow-hidden leading-none ${flip ? "rotate-180" : ""}`}>
    <svg viewBox="0 0 1440 80" fill="none" className="w-full block">
      <path d="M0 40L48 35C96 30 192 20 288 18C384 15 480 20 576 28C672 35 768 45 864 48C960 50 1056 45 1152 38C1248 30 1344 20 1392 15L1440 10V80H0V40Z" fill={color}/>
    </svg>
  </div>
);

const MFG_USPS = [
  { icon: Repeat, title: "No Batch-to-Batch Variation", desc: "Our standardized processes and rigorous quality control ensure every production batch delivers identical quality, potency, and physical characteristics across all dosage forms." },
  { icon: Beaker, title: "Custom Formulation Development", desc: "We collaborate closely with brand partners to develop tailored formulations that meet specific therapeutic objectives, market requirements, and regulatory standards." },
  { icon: TrendingUp, title: "Scalable Production", desc: "From pilot batches to full-scale production, our GMP-certified facility supports flexible volume requirements for startups, mid-size brands, and large enterprises." },
  { icon: Rocket, title: "Low MOQ for Startups", desc: "We support new businesses with low minimum order quantities, enabling startups and emerging brands to launch their product lines without heavy upfront inventory investment." },
];

function MfgCarousel() {
  const [current, setCurrent] = useState(0);
  const total = MFG_USPS.length;
  const timerRef = useRef(null);

  const next = useCallback(() => setCurrent((p) => (p + 1) % total), [total]);
  const prev = useCallback(() => setCurrent((p) => (p - 1 + total) % total), [total]);

  useEffect(() => {
    timerRef.current = setInterval(next, 5000);
    return () => clearInterval(timerRef.current);
  }, [next]);

  const resetTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = setInterval(next, 5000);
  };

  return (
    <div data-testid="mfg-carousel" className="relative">
      {/* Cards row — show all on desktop, one on mobile */}
      <div className="hidden md:grid grid-cols-4 gap-6">
        {MFG_USPS.map((item, idx) => {
          const Icon = item.icon;
          return (
            <ScrollReveal key={item.title} delay={idx * 100}>
              <div className="card-premium p-7 h-full">
                <div className="w-12 h-12 rounded-xl bg-[#064e3b]/5 flex items-center justify-center mb-5">
                  <Icon className="w-6 h-6 text-[#064e3b]" />
                </div>
                <h3 className="text-base font-semibold text-[#064e3b] mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed font-['DM_Sans']">{item.desc}</p>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {/* Mobile carousel */}
      <div className="md:hidden">
        <div className="overflow-hidden">
          <div className="transition-transform duration-500 ease-out" style={{ transform: `translateX(-${current * 100}%)`, display: "flex" }}>
            {MFG_USPS.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="w-full flex-shrink-0 px-1">
                  <div className="card-premium p-7">
                    <div className="w-12 h-12 rounded-xl bg-[#064e3b]/5 flex items-center justify-center mb-5">
                      <Icon className="w-6 h-6 text-[#064e3b]" />
                    </div>
                    <h3 className="text-base font-semibold text-[#064e3b] mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed font-['DM_Sans']">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex items-center justify-center gap-3 mt-6">
          <button onClick={() => { prev(); resetTimer(); }} data-testid="carousel-prev"
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#064e3b] hover:text-[#064e3b] transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <div className="flex items-center gap-2">
            {MFG_USPS.map((_, idx) => (
              <button key={idx} onClick={() => { setCurrent(idx); resetTimer(); }}
                className={`w-2 h-2 rounded-full transition-all ${idx === current ? "bg-[#064e3b] w-6" : "bg-gray-300"}`} />
            ))}
          </div>
          <button onClick={() => { next(); resetTimer(); }} data-testid="carousel-next"
            className="w-9 h-9 rounded-full border border-gray-300 flex items-center justify-center text-gray-500 hover:border-[#064e3b] hover:text-[#064e3b] transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const y = window.scrollY;
        heroRef.current.style.transform = `translateY(${y * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div data-testid="home-page">
      <SEO
        title="Hilton Pharma Chem | Top Ayurvedic Third-Party Manufacturer in Gujarat, India"
        description="Hilton Pharma Chem is a GMP & ISO certified third-party Ayurvedic manufacturer in Sidhpur, Gujarat, serving brand partners across India and Ahmedabad with 25+ years of formulation expertise."
        path="/"
      />
      {/* ===== HERO ===== */}
      <section data-testid="hero-section" className="relative min-h-[92vh] flex items-center overflow-hidden">
        <div className="absolute inset-0" ref={heroRef}>
          <img src={HERO_BG} alt="Hilton Pharma Chem GMP certified Ayurvedic manufacturing facility in Gujarat" className="w-full h-[120%] object-cover" />
        </div>
        <div className="hero-overlay absolute inset-0" />
        <ParticleCanvas />
        <div className="absolute top-20 right-10 w-80 h-80 bg-[#d4a017]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#064e3b]/15 rounded-full blur-3xl" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 w-full flex-none">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-4 py-2 mb-6 animate-fade-in-up">
              <span className="w-2 h-2 rounded-full bg-[#d4a017] animate-pulse" />
              <span className="text-xs tracking-wide uppercase font-semibold text-[#e8b84b] font-['DM_Sans']">
                Third-Party Ayurvedic Manufacturing
              </span>
            </div>
            {/* Static, always-crawlable heading — search engines and screen readers see this
                reliably, unlike JS-animated text alone. Split into a brand line + a short H1
                so it never wraps past 2 lines and collides with the floating stat badges. */}
            <p className="text-xl sm:text-2xl font-semibold text-white/90 animate-fade-in-up animate-delay-100">
              Hilton Pharma Chem
            </p>
            <h1 className="mt-1 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-[1.1] animate-fade-in-up animate-delay-100">
              Top Ayurvedic Manufacturer in Gujarat
            </h1>
            <div className="mt-3 text-xl sm:text-2xl font-medium text-[#e8b84b] animate-fade-in-up animate-delay-100">
              <TypewriterText />
            </div>
            <p className="mt-6 text-lg text-emerald-100/80 leading-relaxed max-w-xl animate-fade-in-up animate-delay-200 font-['DM_Sans']">
              GMP & ISO certified pharmaceutical manufacturing with 25+ years of formulation expertise.
              From concept to market, we deliver consistent quality for domestic and international brands.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in-up animate-delay-300">
              <Link to="/contact">
                <button data-testid="hero-request-quote-btn" className="btn-primary text-base">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <Link to="/products">
                <button data-testid="hero-explore-products-btn" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm font-semibold text-sm transition-all">
                  Explore Products
                </button>
              </Link>
            </div>
          </div>
          {/* Floating badges */}
          <div className="hidden xl:block absolute right-16 top-1/2 -translate-y-1/2 space-y-4">
            {[{ val: "300+", lbl: "Formulations" }, { val: "25+", lbl: "Years Legacy" }, { val: "GMP", lbl: "Certified" }].map((b) => (
              <div key={b.val} className="hero-float-badge bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-6 py-4 text-center">
                <div className="text-2xl font-bold text-white">{b.val}</div>
                <div className="text-[10px] text-[#e8b84b] font-semibold font-['DM_Sans']">{b.lbl}</div>
              </div>
            ))}
          </div>
        </div>
        <WaveDivider color="#ffffff" />
      </section>

      {/* ===== ANIMATED COUNTERS ===== */}
      <section data-testid="usps-section" className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-3 block font-['DM_Sans']">Why Hilton Pharma Chem</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#064e3b]">
                Built on Expertise. Driven by Consistency.
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((item, idx) => (
              <ScrollReveal key={item.label} delay={idx * 100}>
                <div className="card-premium p-8 text-center" data-testid={`usp-card-${idx}`}>
                  <div className="w-14 h-14 rounded-2xl bg-[#064e3b]/5 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-7 h-7 text-[#064e3b]" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-[#064e3b]">
                    {item.display || <AnimatedCounter end={item.value} suffix={item.suffix} />}
                  </div>
                  <p className="mt-2 text-sm text-gray-500 font-medium font-['DM_Sans']">{item.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section data-testid="products-grid" className="py-20 lg:py-28 relative" style={{ background: "#f9fafb" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-3 block font-['DM_Sans']">Product Range</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#064e3b]">
                Comprehensive Manufacturing Capabilities
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((cat, idx) => (
              <ScrollReveal key={cat.title} delay={idx * 100}>
                <Link to={`/products/${cat.slug}`} data-testid={`category-card-${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group card-premium block overflow-hidden">
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                  <div className="p-6 relative z-10">
                    <h3 className="text-lg font-semibold text-[#064e3b] group-hover:text-[#d4a017] transition-colors">{cat.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed font-['DM_Sans']">{cat.desc}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-[#064e3b] group-hover:text-[#d4a017] transition-colors font-['DM_Sans']">
                      Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <WaveDivider color="#ffffff" flip />

      {/* ===== PROCESS ===== */}
      <section data-testid="process-section" className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-[0.015]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #064e3b 1px, transparent 0)", backgroundSize: "40px 40px" }} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-3 block font-['DM_Sans']">How We Work</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#064e3b]">From Enquiry to Dispatch</h2>
              <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto font-['DM_Sans']">
                A transparent, structured process ensuring quality at every stage.
              </p>
            </div>
          </ScrollReveal>
          {/* Desktop */}
          <div className="hidden lg:block">
            <div className="relative">
              <div className="absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-[#064e3b]/20 via-[#d4a017]/40 to-[#064e3b]/20" />
              <div className="grid grid-cols-5 gap-6">
                {PROCESS_STEPS.slice(0, 5).map((step, idx) => (
                  <ScrollReveal key={step.title} delay={idx * 80}>
                    <div className="flex flex-col items-center text-center group">
                      <div className="relative z-10 w-[68px] h-[68px] rounded-2xl bg-[#064e3b] flex items-center justify-center shadow-lg group-hover:shadow-[#064e3b]/30 group-hover:scale-110 transition-all duration-300">
                        <step.icon className="w-6 h-6 text-white" />
                        <span className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#d4a017] text-white text-[10px] font-bold flex items-center justify-center shadow">{idx + 1}</span>
                      </div>
                      <h4 className="mt-4 text-xs font-semibold text-[#1a1a1a]">{step.title}</h4>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
            <div className="flex justify-end pr-[10%] my-5">
              <div className="w-10 h-10 rounded-full border-2 border-dashed border-[#d4a017]/40 flex items-center justify-center">
                <ArrowRight className="w-4 h-4 text-[#d4a017] rotate-90" />
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-14 left-[10%] right-[10%] h-0.5 bg-gradient-to-l from-[#064e3b]/20 via-[#d4a017]/40 to-[#064e3b]/20" />
              <div className="grid grid-cols-5 gap-6">
                {PROCESS_STEPS.slice(5, 10).map((step, idx) => (
                  <ScrollReveal key={step.title} delay={idx * 80}>
                    <div className="flex flex-col items-center text-center group">
                      <div className={`relative z-10 w-[68px] h-[68px] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 ${idx === 4 ? "bg-[#d4a017]" : "bg-[#064e3b]"}`}>
                        <step.icon className="w-6 h-6 text-white" />
                        <span className={`absolute -top-2 -right-2 w-6 h-6 rounded-full text-white text-[10px] font-bold flex items-center justify-center shadow ${idx === 4 ? "bg-[#064e3b]" : "bg-[#d4a017]"}`}>{idx + 6}</span>
                      </div>
                      <h4 className="mt-4 text-xs font-semibold text-[#1a1a1a]">{step.title}</h4>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="lg:hidden">
            <div className="relative">
              <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#064e3b]/30 via-[#d4a017]/30 to-[#064e3b]/30" />
              <div className="space-y-6">
                {PROCESS_STEPS.map((step, idx) => (
                  <div key={step.title} className="relative flex items-start gap-4 pl-1" data-testid={`process-step-${idx + 1}`}>
                    <div className={`relative z-10 flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center shadow-md ${idx === 9 ? "bg-[#d4a017]" : "bg-[#064e3b]"}`}>
                      <step.icon className="w-5 h-5 text-white" />
                      <span className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-[#d4a017] text-white text-[9px] font-bold flex items-center justify-center">{idx + 1}</span>
                    </div>
                    <div className="pt-2"><h4 className="text-sm font-semibold text-[#1a1a1a]">{step.title}</h4></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <WaveDivider color="#f9fafb" />

      {/* ===== MANUFACTURING USPs CAROUSEL ===== */}
      <section data-testid="mfg-usps-section" className="py-20 lg:py-28 relative" style={{ background: "#f9fafb" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-3 block font-['DM_Sans']">Our Commitment</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#064e3b]">
                What Sets Our Manufacturing Apart
              </h2>
            </div>
          </ScrollReveal>
          <MfgCarousel />
        </div>
      </section>

      {/* ===== ABOUT TEASER ===== */}
      <section data-testid="about-teaser" className="py-20 lg:py-28 relative overflow-hidden" style={{ background: "#f9fafb" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-4 block font-['DM_Sans']">About Hilton Pharma Chem</span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#064e3b]">From Formulation Expertise to Manufacturing Excellence</h2>
                <p className="mt-6 text-base text-gray-600 leading-relaxed font-['DM_Sans']">
                  Hilton Pharma Chem is an India-based pharmaceutical manufacturing company focused on
                  wellness and pain management solutions. We offer third-party and private-label manufacturing
                  for domestic and international markets.
                </p>
                <ul className="mt-8 space-y-4">
                  {["Direct manufacturer-to-distributor partnerships", "Customized formulations, packaging, and volumes", "Scalable production for startups to large enterprises", "Plant in Sidhpur, Gujarat with state-of-the-art infrastructure"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-[#064e3b]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle className="w-3.5 h-3.5 text-[#064e3b]" />
                      </div>
                      <span className="text-gray-600 text-sm font-['DM_Sans']">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-10">
                  <Link to="/about"><button data-testid="about-learn-more-btn" className="btn-primary">Learn More About Us <ArrowRight className="w-4 h-4" /></button></Link>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#064e3b]/10 to-[#d4a017]/10 rounded-3xl -rotate-2 hidden lg:block" />
                <img src={ABOUT_IMG} alt="Sachet and strip packing machine at Hilton Pharma Chem's GMP certified facility" className="relative w-full rounded-2xl shadow-xl" />
                <div className="absolute -bottom-6 -left-6 bg-[#064e3b] text-white p-5 rounded-2xl shadow-xl hidden lg:flex flex-col items-center">
                  <div className="text-3xl font-bold">25+</div>
                  <div className="text-[11px] text-[#e8b84b] font-semibold font-['DM_Sans']">Years of Legacy</div>
                </div>
                <div className="absolute -top-4 -right-4 bg-[#d4a017] text-white px-4 py-2.5 rounded-xl shadow-lg hidden lg:block text-center">
                  <div className="text-lg font-bold">300+</div>
                  <div className="text-[9px] font-semibold opacity-80 font-['DM_Sans']">Formulations</div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FACILITY GALLERY ===== */}
      <section data-testid="facility-gallery" className="py-20 lg:py-28 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-3 block font-['DM_Sans']">Behind the Scenes</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#064e3b]">Inside Our Manufacturing Facility</h2>
              <p className="mt-4 text-base text-gray-500 max-w-2xl mx-auto font-['DM_Sans']">
                A real look at the machinery producing your formulations — from mixing to filling to final packing.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {GALLERY_IMAGES.map((img, idx) => (
              <ScrollReveal key={img.label} delay={idx * 100}>
                <div className="group relative aspect-[3/4] rounded-2xl overflow-hidden shadow-md" data-testid={`gallery-item-${idx}`}>
                  <img
                    src={img.src}
                    alt={`${img.label} at Hilton Pharma Chem GMP certified facility`}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/0 to-black/0 opacity-70 group-hover:opacity-90 transition-opacity" />
                  <div className="absolute bottom-0 left-0 right-0 p-4">
                    <p className="text-white text-sm font-semibold leading-tight">{img.label}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-20 lg:py-24 relative overflow-hidden" style={{ background: "#022c22" }}>
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#064e3b]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#d4a017]/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 grain-overlay" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <ScrollReveal>
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/10 rounded-full px-4 py-2 mb-6">
              <span className="text-xs tracking-wide uppercase font-semibold text-[#e8b84b] font-['DM_Sans']">Start Your Journey</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
              Ready to Bring Your Product Vision to Life?
            </h2>
            <p className="mt-4 text-base text-emerald-200/70 max-w-2xl mx-auto font-['DM_Sans']">
              Whether you are an established brand or a startup, we provide the manufacturing
              expertise and scalability to help you succeed.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <button data-testid="cta-contact-btn" className="btn-gold text-base">
                  Get Started Today <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
              <a href="tel:9328119224">
                <button data-testid="cta-call-btn" className="inline-flex items-center gap-2 px-7 py-3 rounded-full border border-emerald-400/30 text-emerald-100 hover:bg-emerald-800/40 text-sm font-semibold transition-all">
                  Call +91 9328119224
                </button>
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
