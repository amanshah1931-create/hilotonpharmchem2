import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Star } from "lucide-react";
import PRODUCT_CATEGORIES from "@/data/productData";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

const HERO_BG = "/images/facility/mixing-tanks.jpg";
const FEATURED_SLUGS = ["ointments-creams-gels", "tablets-capsules"];

const FILTER_TAB_DEFS = [
  { label: "All", value: "all" },
  { label: "Ointments", value: "ointments-creams-gels" },
  { label: "Syrups", value: "syrups-liquids" },
  { label: "Oils", value: "oils" },
  { label: "Powders", value: "herbal-powders" },
  { label: "Tablets", value: "tablets-capsules" },
  { label: "Winter", value: "winter-seasonal" },
];

const totalProducts = PRODUCT_CATEGORIES.reduce((sum, c) => sum + c.products.length, 0);
const FILTER_TABS = FILTER_TAB_DEFS.map((tab) => {
  if (tab.value === "all") return { ...tab, count: totalProducts };
  const cat = PRODUCT_CATEGORIES.find((c) => c.slug === tab.value);
  return { ...tab, count: cat ? cat.products.length : 0 };
});

export default function Products() {
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? PRODUCT_CATEGORIES : PRODUCT_CATEGORIES.filter((c) => c.slug === filter);

  return (
    <div data-testid="products-page">
      <SEO
        title="Ayurvedic Product Manufacturing Range | Hilton Pharma Chem"
        description="Explore Hilton Pharma Chem's third-party manufacturing range: ayurvedic tablets, capsules, syrups, oils, ointments, creams, gels, and herbal powders — GMP & ISO certified, made in Gujarat, India."
        path="/products"
        keywords="ayurvedic tablets manufacturer, ayurvedic capsules manufacturer, ayurvedic syrup manufacturer, ayurvedic oil manufacturer Gujarat"
      />
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="Mixing vessels at Hilton Pharma Chem's GMP certified Ayurvedic manufacturing facility" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "rgba(2,44,34,0.85)" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-4 block font-['DM_Sans']">Product Range</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">Manufacturing Capabilities</h1>
          <p className="mt-4 text-lg text-emerald-200/70 max-w-2xl font-['DM_Sans']">
            Comprehensive product development and manufacturing across multiple dosage forms. 300+ formulations developed.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="bg-white border-b border-gray-200 sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 py-3 overflow-x-auto scrollbar-hide" data-testid="product-filter-tabs">
            {FILTER_TABS.map((tab) => (
              <button
                key={tab.value}
                data-testid={`filter-tab-${tab.value}`}
                onClick={() => setFilter(tab.value)}
                className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all font-['DM_Sans'] ${
                  filter === tab.value
                    ? "bg-[#064e3b] text-white shadow-sm"
                    : "text-gray-500 hover:text-[#064e3b] hover:bg-gray-100"
                }`}
              >
                {tab.label}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${filter === tab.value ? "bg-white/20" : "bg-gray-200"}`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Product Grid */}
      <section data-testid="product-catalog" className="py-20 lg:py-28" style={{ background: "#f9fafb" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-3 block font-['DM_Sans']">Explore Categories</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#064e3b]">Our Complete Product Portfolio</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" key={filter}>
            {filtered.map((cat, idx) => (
              <ScrollReveal key={cat.slug} delay={idx * 60}>
                <Link to={`/products/${cat.slug}`} data-testid={`category-card-${cat.slug}`}
                  className="group card-premium block overflow-hidden relative h-full">
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img src={cat.image} alt={cat.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {FEATURED_SLUGS.includes(cat.slug) && (
                      <div className="absolute top-3 left-3 bg-[#d4a017] text-white px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" /> Core Expertise
                      </div>
                    )}
                    <span className="absolute bottom-3 left-3 text-white text-xs font-medium opacity-80 font-['DM_Sans']">{cat.products.length} Products</span>
                    {/* Hover overlay */}
                    <div className="product-card-overlay absolute inset-0 bg-[#064e3b]/80 flex items-center justify-center">
                      <span className="btn-gold text-sm">View Full Range</span>
                    </div>
                  </div>
                  <div className="p-6 relative z-10">
                    <h3 className="text-lg font-semibold text-[#064e3b] group-hover:text-[#d4a017] transition-colors">{cat.title}</h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3 font-['DM_Sans']">{cat.shortDesc}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-[#064e3b] group-hover:text-[#d4a017] transition-colors font-['DM_Sans']">
                      View Full Range <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Highlights */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-16">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-3 block font-['DM_Sans']">Our Commitment</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#064e3b]">What Sets Our Manufacturing Apart</h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: "No Batch-to-Batch Variation", desc: "Our standardized processes ensure every production batch delivers identical quality, potency, and physical characteristics." },
              { title: "Custom Formulation Development", desc: "We collaborate with brand partners to develop tailored formulations meeting specific therapeutic objectives." },
              { title: "Scalable Production", desc: "From pilot batches to full-scale production, our facility supports flexible volume requirements." },
            ].map((item, idx) => (
              <ScrollReveal key={item.title} delay={idx * 100}>
                <div className="card-premium p-8">
                  <h3 className="text-lg font-semibold text-[#064e3b]">{item.title}</h3>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed font-['DM_Sans']">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 relative grain-overlay" style={{ background: "#022c22" }}>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">Looking for a Reliable Manufacturing Partner?</h2>
            <p className="mt-4 text-base text-emerald-200/70 max-w-2xl mx-auto font-['DM_Sans']">
              Share your product requirements and let us develop a customized manufacturing solution.
            </p>
            <div className="mt-10">
              <Link to="/contact">
                <button data-testid="products-cta-btn" className="btn-gold text-base">
                  Discuss Your Requirements <ArrowRight className="w-4 h-4" />
                </button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
