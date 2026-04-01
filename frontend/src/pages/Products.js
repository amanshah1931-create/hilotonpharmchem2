import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";

const HERO_BG = "https://images.unsplash.com/photo-1754372069872-3fef8a815c87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmd8ZW58MHx8fHwxNzc1MDUyODU5fDA&ixlib=rb-4.1.0&q=85";

const PRODUCT_CATEGORIES = [
  {
    title: "Capsules & Tablets",
    image: "https://images.pexels.com/photos/11589213/pexels-photo-11589213.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "We manufacture Ayurvedic and nutraceutical capsules and tablets with precise dosing, consistent dissolution profiles, and extended shelf stability. Our formulation expertise covers single-herb extracts, poly-herbal combinations, and mineral-based supplements.",
    products: [
      "Ayurvedic capsules (single & poly-herbal)",
      "Nutraceutical tablets",
      "Mineral & vitamin supplements",
      "Herbal extract capsules",
      "Wellness formulations",
    ],
    featured: false,
  },
  {
    title: "Syrups & Liquids",
    image: "https://images.pexels.com/photos/10022079/pexels-photo-10022079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Our liquid formulation capabilities include Ayurvedic syrups, health tonics, and cough & cold preparations. Each formulation undergoes comprehensive stability testing to ensure efficacy throughout its shelf life.",
    products: [
      "Ayurvedic syrups & tonics",
      "Cough & cold preparations",
      "Digestive syrups",
      "Wellness tonics",
      "Pediatric liquid formulations",
    ],
    featured: false,
  },
  {
    title: "Oils & Ointments",
    image: "https://images.pexels.com/photos/4021768/pexels-photo-4021768.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    description: "Pain relief ointments and therapeutic oils are our core competency. Our founder has developed specialized formulations that deliver consistent therapeutic performance with zero batch-to-batch variation. This category represents our strongest manufacturing expertise.",
    products: [
      "Pain relief ointments & balms",
      "Therapeutic massage oils",
      "Medicated creams",
      "Inhalers & vapor rubs",
      "Muscle & joint care products",
    ],
    featured: true,
  },
  {
    title: "Churnas & Powders",
    image: "https://images.unsplash.com/photo-1633509907796-ece8a21bdbcb?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHw0fHxheXVydmVkaWMlMjBoZXJicyUyMHBvd2RlcnxlbnwwfHx8fDE3NzUwNTI4NjF8MA&ixlib=rb-4.1.0&q=85",
    description: "Traditional Ayurvedic churna and powder formulations processed using controlled grinding and blending techniques that maintain herb potency, particle consistency, and product stability throughout storage.",
    products: [
      "Traditional Ayurvedic churnas",
      "Herbal powder blends",
      "Protein & wellness powders",
      "Digestive powder formulations",
      "Immunity support powders",
    ],
    featured: false,
  },
];

export default function Products() {
  return (
    <div data-testid="products-page">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28">
        <div className="absolute inset-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-emerald-950/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-400 mb-4 block">
            Product Range
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Manufacturing Capabilities
          </h1>
          <p className="mt-4 text-lg text-emerald-200 max-w-2xl">
            Comprehensive product development and manufacturing across multiple dosage forms.
            From concept to market-ready products.
          </p>
        </div>
      </section>

      {/* Product Catalog */}
      <section data-testid="product-catalog" className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {PRODUCT_CATEGORIES.map((cat, idx) => (
              <div
                key={cat.title}
                data-testid={`product-category-${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                <div className={idx % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="relative">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full rounded-xl shadow-lg aspect-[4/3] object-cover"
                    />
                    {cat.featured && (
                      <div className="absolute top-4 left-4 bg-orange-600 text-white px-3 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" />
                        Core Expertise
                      </div>
                    )}
                  </div>
                </div>
                <div className={idx % 2 === 1 ? "lg:order-1" : ""}>
                  {cat.featured && (
                    <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-600 mb-2 block">
                      Our Specialization
                    </span>
                  )}
                  <h2
                    className="text-2xl md:text-3xl font-semibold tracking-tight text-emerald-900"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    {cat.title}
                  </h2>
                  <p className="mt-4 text-base text-stone-600 leading-relaxed">{cat.description}</p>
                  <ul className="mt-6 space-y-3">
                    {cat.products.map((p) => (
                      <li key={p} className="flex items-start gap-3">
                        <CheckCircle className="w-4 h-4 text-emerald-700 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-stone-600">{p}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Highlights */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-600 mb-2 block">
              Our Commitment
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              What Sets Our Manufacturing Apart
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "No Batch-to-Batch Variation",
                desc: "Our standardized processes and rigorous quality control ensure every production batch delivers identical quality, potency, and physical characteristics.",
              },
              {
                title: "Custom Formulation Development",
                desc: "We collaborate with brand partners to develop tailored formulations that meet specific therapeutic objectives, market requirements, and regulatory standards.",
              },
              {
                title: "Scalable Production",
                desc: "From pilot batches to full-scale production, our facility supports flexible volume requirements for startups, mid-size brands, and large-scale enterprises.",
              },
            ].map((item) => (
              <div key={item.title} className="bg-stone-50 border border-stone-200 rounded-xl p-8 card-hover">
                <h3
                  className="text-lg font-semibold text-emerald-900"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-stone-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 lg:py-24 bg-emerald-950 relative grain-overlay">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl md:text-4xl font-semibold tracking-tight text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Looking for a Reliable Manufacturing Partner?
          </h2>
          <p className="mt-4 text-base text-emerald-200 max-w-2xl mx-auto">
            Share your product requirements and let us develop a customized manufacturing solution for your brand.
          </p>
          <div className="mt-10">
            <Link to="/contact">
              <Button
                data-testid="products-cta-btn"
                className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-base font-medium rounded-md"
              >
                Discuss Your Requirements
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
