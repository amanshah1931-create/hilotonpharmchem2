import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, CheckCircle, Shield, FlaskConical } from "lucide-react";
import PRODUCT_CATEGORIES from "@/data/productData";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

function useProductJsonLd(category) {
  useEffect(() => {
    if (!category) return;
    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "product-jsonld";
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": category.title,
      "description": category.seoDescription,
      "brand": { "@type": "Brand", "name": "Hilton Pharma Chem" },
      "manufacturer": {
        "@type": "Organization",
        "name": "Hilton Pharma Chem",
        "address": { "@type": "PostalAddress", "addressLocality": "Sidhpur", "addressRegion": "Gujarat", "addressCountry": "IN" }
      },
      "category": "Ayurvedic Pharmaceutical Manufacturing"
    });
    document.head.appendChild(script);
    return () => {
      const el = document.getElementById("product-jsonld");
      if (el) el.remove();
    };
  }, [category]);
}

export default function ProductCategory() {
  const { slug } = useParams();
  const category = PRODUCT_CATEGORIES.find((c) => c.slug === slug);
  useProductJsonLd(category);

  if (!category) {
    return (
      <div className="pt-32 pb-20 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-semibold text-emerald-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Category Not Found
        </h1>
        <Link to="/products" className="inline-flex items-center gap-2 mt-6 text-emerald-900 hover:text-[#d4a017] font-medium">
          <ArrowLeft className="w-4 h-4" /> Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div data-testid={`product-category-page-${slug}`}>
      <SEO
        title={`${category.title} Manufacturer in Gujarat | Hilton Pharma Chem`}
        description={category.seoDescription || `Third-party ${category.title.toLowerCase()} manufacturing by Hilton Pharma Chem — GMP & ISO certified facility in Sidhpur, Gujarat, serving brands across India.`}
        path={`/products/${slug}`}
        image={category.image}
      />
      {/* Hero Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-emerald-950/80" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <Link
              to="/products"
              data-testid="back-to-products-link"
              className="inline-flex items-center gap-2 text-sm text-emerald-300 hover:text-white transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> All Products
            </Link>
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-4 block">
              Product Category
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              {category.title}
            </h1>
            <p className="mt-4 text-lg text-emerald-200 max-w-3xl leading-relaxed">
              {category.heroDesc}
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <ScrollReveal>
              <div className="lg:col-span-2">
                <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-3 block">
                  Our Advantage
                </span>
                <h2
                  className="text-2xl md:text-3xl font-semibold tracking-tight text-emerald-900"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Why Brands Choose Hilton Pharma Chem
                </h2>
                <p className="mt-4 text-sm text-stone-500 leading-relaxed">
                  Our manufacturing process for {category.shortTitle.toLowerCase()} is backed by 25+ years of formulation expertise
                  and GMP/ISO certified production standards.
                </p>
                <div className="mt-6 flex items-center gap-4">
                  <div className="flex items-center gap-2 bg-emerald-50 px-3 py-1.5 rounded-lg">
                    <Shield className="w-4 h-4 text-emerald-700" />
                    <span className="text-xs font-semibold text-emerald-800">GMP Certified</span>
                  </div>
                  <div className="flex items-center gap-2 bg-[#d4a017]/5 px-3 py-1.5 rounded-lg">
                    <FlaskConical className="w-4 h-4 text-[#d4a017]" />
                    <span className="text-xs font-semibold text-[#d4a017]">300+ Formulations</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={150}>
              <div className="lg:col-span-3">
                <div className="space-y-4">
                  {category.whyChoose.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-4 bg-stone-50 rounded-xl p-5 border border-stone-100 transition-all hover:border-[#d4a017]/40 hover:shadow-sm">
                      <div className="w-8 h-8 rounded-lg bg-emerald-900 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-bold">{idx + 1}</span>
                      </div>
                      <p className="text-sm text-stone-600 leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Product Listing */}
      <section className="py-16 lg:py-24 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-14">
              <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-3 block">
                Full Product Range
              </span>
              <h2
                className="text-2xl md:text-3xl font-semibold tracking-tight text-emerald-900"
                style={{ fontFamily: "'Outfit', sans-serif" }}
              >
                {category.title} - Manufacturing Portfolio
              </h2>
              <p className="mt-3 text-sm text-stone-500 max-w-2xl mx-auto">
                All products are available for third-party and private-label manufacturing with customizable formulations, branding, and packaging.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {category.products.map((product, idx) => (
              <ScrollReveal key={product.name} delay={(idx % 6) * 60}>
                <div
                  data-testid={`product-item-${idx}`}
                  className="group card-premium p-6 relative h-full"
                >
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-xl bg-[#064e3b]/10 flex items-center justify-center mb-4">
                      <CheckCircle className="w-5 h-5 text-[#064e3b]" />
                    </div>
                    <h3 className="text-base font-semibold text-[#064e3b] group-hover:text-[#d4a017] transition-colors">
                      {product.name}
                    </h3>
                    <p className="mt-2 text-sm text-gray-500 leading-relaxed font-['DM_Sans']">
                      {product.desc}
                    </p>
                    <Link to="/contact" className="product-card-overlay absolute inset-0 bg-[#064e3b]/90 rounded-xl flex items-center justify-center z-20">
                      <span className="btn-gold text-sm">Request This Product</span>
                    </Link>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other Categories */}
      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <h3
              className="text-xl font-semibold text-emerald-900 mb-8"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Explore Other Product Categories
            </h3>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {PRODUCT_CATEGORIES.filter((c) => c.slug !== slug).map((c, idx) => (
              <ScrollReveal key={c.slug} delay={idx * 60}>
                <Link
                  to={`/products/${c.slug}`}
                  data-testid={`related-category-${c.slug}`}
                  className="group bg-stone-50 border border-stone-200 rounded-xl p-4 text-center hover:border-[#d4a017]/50 hover:bg-[#d4a017]/5 hover:-translate-y-1 transition-all block"
                >
                  <img src={c.image} alt={c.shortTitle} className="w-full aspect-[4/3] object-cover rounded-lg mb-3 group-hover:scale-105 transition-transform duration-500" />
                  <span className="text-xs font-semibold text-emerald-900 group-hover:text-[#d4a017] transition-colors">
                    {c.shortTitle}
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-20 bg-emerald-950 relative grain-overlay">
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2
              className="text-2xl md:text-3xl font-semibold tracking-tight text-white"
              style={{ fontFamily: "'Outfit', sans-serif" }}
            >
              Interested in Manufacturing {category.shortTitle}?
            </h2>
            <p className="mt-3 text-emerald-200 text-sm max-w-xl mx-auto">
              Share your formulation requirements and let us develop a customized manufacturing plan for your brand.
            </p>
            <div className="mt-8">
              <Link to="/contact">
                <Button
                  data-testid="category-cta-btn"
                  className="bg-[#d4a017] hover:bg-[#e8b84b] text-white px-8 py-3 rounded-full shadow-lg shadow-[#d4a017]/30"
                >
                  Request a Quote <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
