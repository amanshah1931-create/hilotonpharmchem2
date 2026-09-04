import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Shield, Award, Target, Handshake, ArrowRight, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";
import ScrollReveal from "@/components/ScrollReveal";

const FACILITY_IMG = "/images/facility/mixing-tanks.jpg";
const HERO_BG = "/images/facility/sachet-packing.jpg";

const VALUES = [
  {
    icon: Shield,
    title: "Quality Consistency",
    desc: "Rigorous in-process quality checks and QC testing at every stage ensure zero batch-to-batch variation across our entire product range.",
  },
  {
    icon: Handshake,
    title: "Trust & Integrity",
    desc: "We build long-term partnerships based on transparency, reliable supply chains, and optimized pricing for our manufacturing clients.",
  },
  {
    icon: Target,
    title: "Regulatory Compliance",
    desc: "Our GMP and ISO certified facility operates with strict adherence to CDSCO guidelines and international quality standards.",
  },
  {
    icon: Award,
    title: "Process Discipline",
    desc: "Documented SOPs for every manufacturing stage, from raw material receipt to finished product dispatch, ensure reproducibility.",
  },
];

export default function About() {
  return (
    <div data-testid="about-page">
      <SEO
        title="About Hilton Pharma Chem | 25+ Years Ayurvedic Manufacturing Legacy"
        description="Hilton Pharma Chem is an India-based GMP & ISO certified Ayurvedic manufacturer with a plant in Sidhpur, Gujarat and corporate office in Ahmedabad. 25+ years of formulation expertise, 500+ products manufactured."
        path="/about"
        keywords="about Hilton Pharma Chem, Hilton Pharma Gujarat, ayurvedic manufacturer Sidhpur, top ayurvedic manufacturer Ahmedabad"
      />
      {/* Page Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-emerald-950/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-4 block">
              Our Story
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              About Hilton Pharma Chem
            </h1>
            <p className="mt-4 text-lg text-emerald-200 max-w-2xl">
              25+ years of pharmaceutical formulation expertise. 300+ formulations developed.
              One commitment: dependable manufacturing partnerships.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Story Section */}
      <section data-testid="about-story" className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-4 block">
                  Our Foundation
                </span>
                <h2
                  className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  A Legacy of Pharmaceutical Formulation Expertise
                </h2>
                <div className="mt-6 space-y-4 text-base text-stone-600 leading-relaxed">
                  <p>
                    Hilton Pharma Chem is an India-based pharmaceutical manufacturing company focused on
                    wellness and pain management solutions, offering third-party and private-label manufacturing
                    for domestic and international markets.
                  </p>
                  <p>
                    The foundation of the company is built on a 25+ years legacy of pharmaceutical formulation
                    expertise carried by our founder, who has been directly involved in the development of more
                    than 300 formulations across pain management, wellness, and allied therapeutic segments.
                  </p>
                  <p>
                    We specialize in the development and manufacturing of pain relief ointments, balms, oils,
                    inhalers, syrups, capsules, and creams with a strong emphasis on quality consistency,
                    trust, integrity, regulatory compliance, and cost-effective production.
                  </p>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="relative">
                <img
                  src={FACILITY_IMG}
                  alt="Jacketed stainless steel mixing vessels at Hilton Pharma Chem's GMP certified manufacturing facility"
                  className="w-full rounded-xl shadow-lg"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Partnership Model */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-3xl mx-auto text-center mb-16">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-2 block">
                How We Work
              </span>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Manufacturer-to-Distributor Partnerships
              </h2>
              <p className="mt-4 text-base text-stone-600 leading-relaxed">
                Our operations are structured to support direct manufacturer-to-distributor partnerships,
                enabling clients to benefit from optimized pricing, reliable supply, and long-term collaboration.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Formulation Alignment",
                desc: "We work closely with partners to align formulations, ingredients, and specifications as per market and regulatory requirements.",
              },
              {
                step: "02",
                title: "Packaging & Production",
                desc: "Custom packaging design and scalable production volumes tailored to your brand identity and market needs.",
              },
              {
                step: "03",
                title: "Quality & Dispatch",
                desc: "Comprehensive QC testing, batch documentation, and reliable dispatch schedules for consistent supply chain performance.",
              },
            ].map((item, idx) => (
              <ScrollReveal key={item.step} delay={idx * 120}>
                <div className="bg-white border border-stone-200 rounded-xl p-8 card-hover h-full">
                  <div
                    className="text-5xl font-bold text-stone-200 mb-4"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.step}
                  </div>
                  <h3
                    className="text-xl font-semibold text-emerald-900 mb-3"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-stone-500 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-2 block">
                Our Values
              </span>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                What Defines Our Manufacturing Practice
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VALUES.map((v, idx) => (
              <ScrollReveal key={v.title} delay={idx * 100}>
                <div
                  data-testid={`value-card-${v.title.toLowerCase().replace(/\s+/g, "-")}`}
                  className="flex gap-6 p-8 bg-stone-50 rounded-xl border border-stone-200 card-hover h-full"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-emerald-900 flex items-center justify-center">
                      <v.icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3
                      className="text-xl font-semibold text-emerald-900"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {v.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-500 leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section data-testid="certifications-section" className="py-20 lg:py-28 relative grain-overlay" style={{ background: "#022c22" }}>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-4 block">Certifications</span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                  GMP & ISO Certified Manufacturing Facility
                </h2>
                <p className="mt-6 text-base text-emerald-200/70 leading-relaxed">
                  Our manufacturing plant in Sidhpur, Patan, Gujarat operates under stringent quality
                  management systems. Every process is documented and controlled to meet national and international standards.
                </p>
                <ul className="mt-8 space-y-4">
                  {["Good Manufacturing Practice (GMP) compliance", "ISO certified quality management system", "CDSCO regulatory standards adherence", "Comprehensive batch documentation and audit trails", "Environmental monitoring and contamination control"].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-[#d4a017] mt-0.5 flex-shrink-0" />
                      <span className="text-emerald-100/80 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="flex justify-center gap-6 lg:gap-8">
                {[
                  { icon: Shield, label: "GMP", sub: "Good Manufacturing\nPractice" },
                  { icon: Award, label: "ISO", sub: "Quality Management\nSystem" },
                  { icon: Award, label: "AYUSH", sub: "Ministry\nApproved" },
                ].map((cert) => (
                  <div key={cert.label} className="glow-badge bg-[#064e3b]/50 backdrop-blur border border-emerald-700/50 rounded-2xl p-8 text-center">
                    <cert.icon className="w-14 h-14 text-[#d4a017] mx-auto mb-3" />
                    <div className="text-xl font-bold text-white">{cert.label}</div>
                    <p className="mt-2 text-xs text-emerald-300/70 whitespace-pre-line">{cert.sub}</p>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-2 block">
                Our Locations
              </span>
              <h2
                className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                Strategically Located in Gujarat, India
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <ScrollReveal delay={0}>
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-8 text-center card-hover h-full">
                <div className="w-12 h-12 rounded-full bg-emerald-900 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>P</span>
                </div>
                <h3 className="text-xl font-semibold text-emerald-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Manufacturing Plant
                </h3>
                <p className="mt-2 text-sm text-stone-500">Sidhpur, Patan, Gujarat</p>
                <p className="mt-1 text-xs text-stone-400">GMP & ISO Certified Facility</p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120}>
              <div className="bg-stone-50 border border-stone-200 rounded-xl p-8 text-center card-hover h-full">
                <div className="w-12 h-12 rounded-full bg-emerald-900 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white text-lg font-bold" style={{ fontFamily: "'Outfit', sans-serif" }}>C</span>
                </div>
                <h3 className="text-xl font-semibold text-emerald-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
                  Corporate Office
                </h3>
                <p className="mt-2 text-sm text-stone-500">Ahmedabad, Gujarat</p>
                <p className="mt-1 text-xs text-stone-400">Business Operations Hub</p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-stone-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-semibold text-emerald-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
              Interested in a Manufacturing Partnership?
            </h2>
            <p className="mt-3 text-stone-500">
              Let us discuss how we can support your product development and manufacturing needs.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button
                  data-testid="about-cta-btn"
                  className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-3 rounded-md"
                >
                  Contact Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
