import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User } from "lucide-react";
import axios from "axios";
import DOMPurify from "dompurify";
import SEO from "@/components/SEO";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function BlogPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const res = await axios.get(`${API}/blogs/${slug}`);
        setPost(res.data);
      } catch (err) {
        console.error("Failed to fetch blog post:", err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="pt-32 pb-20 max-w-3xl mx-auto px-4">
        <div className="animate-pulse space-y-6">
          <div className="h-4 bg-stone-200 rounded w-1/4" />
          <div className="h-8 bg-stone-200 rounded w-3/4" />
          <div className="h-64 bg-stone-200 rounded" />
          <div className="h-4 bg-stone-200 rounded w-full" />
          <div className="h-4 bg-stone-200 rounded w-5/6" />
        </div>
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="pt-32 pb-20 max-w-3xl mx-auto px-4 text-center">
        <h1 className="text-2xl font-semibold text-emerald-900" style={{ fontFamily: "'Outfit', sans-serif" }}>
          Post Not Found
        </h1>
        <p className="mt-2 text-stone-500">The blog post you are looking for does not exist.</p>
        <Link
          to="/blog"
          data-testid="blog-back-link"
          className="inline-flex items-center gap-2 mt-6 text-emerald-900 hover:text-[#d4a017] font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
      </div>
    );
  }

  return (
    <div data-testid="blog-post-page">
      <SEO
        title={`${post.title} | Hilton Pharma Chem`}
        description={post.excerpt || post.summary || `${post.title} — insights from Hilton Pharma Chem, a GMP & ISO certified Ayurvedic third-party manufacturer in Gujarat, India.`}
        path={`/blog/${slug}`}
        image={post.image_url}
      />
      {/* Header */}
      <section className="pt-32 pb-12 lg:pt-40 lg:pb-16 bg-white border-b border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            data-testid="blog-back-link"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-emerald-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          {post.category && (
            <span className="text-xs tracking-[0.15em] uppercase font-bold text-[#d4a017] mb-3 block">
              {post.category}
            </span>
          )}
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-emerald-950 leading-tight"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            {post.title}
          </h1>
          <div className="mt-6 flex items-center gap-6 text-sm text-stone-500">
            <span className="flex items-center gap-2">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              {new Date(post.created_at).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
        </div>
      </section>

      {/* Featured Image */}
      {post.image_url && (
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 -mt-0 mb-12">
          <img
            src={post.image_url}
            alt={post.title}
            className="w-full rounded-xl shadow-lg aspect-[16/9] object-cover mt-8"
          />
        </div>
      )}

      {/* Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
        />
      </article>

      {/* CTA */}
      <section className="py-16 bg-stone-50 border-t border-stone-200">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-stone-600">
            Interested in manufacturing your Ayurvedic or pharmaceutical products with us?
          </p>
          <Link
            to="/contact"
            data-testid="blog-post-contact-link"
            className="inline-flex items-center gap-2 mt-4 text-emerald-900 hover:text-[#d4a017] font-medium transition-colors"
          >
            Get in Touch
            <span className="text-sm">→</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
