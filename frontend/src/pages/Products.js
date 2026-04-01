import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle, Star } from "lucide-react";
import PRODUCT_CATEGORIES from "@/data/productData";

const HERO_BG = "https://images.unsplash.com/photo-1754372069872-3fef8a815c87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA2OTV8MHwxfHNlYXJjaHwzfHxtb2Rlcm4lMjBwaGFybWFjZXV0aWNhbCUyMG1hbnVmYWN0dXJpbmd8ZW58MHx8fHwxNzc1MDUyODU5fDA&ixlib=rb-4.1.0&q=85";

const FEATURED_SLUGS = ["ointments-creams-gels", "tablets-capsules"];

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
            Comprehensive product development and manufacturing across multiple dosage forms and categories.
            From concept to market-ready products with 300+ formulations developed.
          </p>
        </div>
      </section>

      {/* Product Categories Grid */}
      <section data-testid="product-catalog" className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-600 mb-3 block">
              Explore Categories
            </span>
            <h2
              className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-900"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Our Complete Product Portfolio
            </h2>
            <p className="mt-3 text-sm text-stone-500 max-w-2xl mx-auto">
              Click on any category to explore the full product range and detailed manufacturing capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PRODUCT_CATEGORIES.map((cat) => {
              const isFeatured = FEATURED_SLUGS.includes(cat.slug);
              return (
                <Link
                  key={cat.slug}
                  to={`/products/${cat.slug}`}
                  data-testid={`category-card-${cat.slug}`}
                  className="group bg-white rounded-2xl overflow-hidden border border-stone-200 card-hover relative"
                >
                  <div className="aspect-[16/10] overflow-hidden relative">
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    {isFeatured && (
                      <div className="absolute top-3 left-3 bg-orange-600 text-white px-2.5 py-1 rounded-md text-xs font-semibold flex items-center gap-1">
                        <Star className="w-3 h-3" /> Core Expertise
                      </div>
                    )}
                    <div className="absolute bottom-3 left-3 right-3">
                      <span className="text-white text-xs font-medium opacity-80">
                        {cat.products.length} Products
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3
                      className="text-lg font-semibold text-emerald-900 group-hover:text-orange-600 transition-colors"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      {cat.title}
                    </h3>
                    <p className="mt-2 text-sm text-stone-500 leading-relaxed line-clamp-3">{cat.shortDesc}</p>
                    <span className="inline-flex items-center gap-1 mt-4 text-xs font-semibold text-emerald-800 group-hover:text-orange-600 transition-colors">
                      View Full Range <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Manufacturing Highlights */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-600 mb-3 block">
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
                className="bg-orange-600 hover:bg-orange-500 text-white px-8 py-3.5 text-base font-medium rounded-full shadow-lg shadow-orange-600/30"
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
