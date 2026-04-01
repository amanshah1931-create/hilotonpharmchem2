import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, ArrowRight, User } from "lucide-react";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(`${API}/blogs`);
        setPosts(res.data);
      } catch (err) {
        console.error("Failed to fetch blog posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div data-testid="blog-page">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-400 mb-4 block">
            Insights & Knowledge
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Blog
          </h1>
          <p className="mt-4 text-lg text-emerald-200 max-w-2xl">
            Industry insights, manufacturing best practices, and knowledge resources for
            Ayurvedic and pharmaceutical brands.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section data-testid="blog-grid" className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-white rounded-xl overflow-hidden border border-stone-200 animate-pulse">
                  <div className="h-56 bg-stone-200" />
                  <div className="p-6 space-y-4">
                    <div className="h-4 bg-stone-200 rounded w-1/4" />
                    <div className="h-6 bg-stone-200 rounded w-3/4" />
                    <div className="h-4 bg-stone-200 rounded w-full" />
                    <div className="h-4 bg-stone-200 rounded w-2/3" />
                  </div>
                </div>
              ))}
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-stone-500 text-lg">No blog posts available yet.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {posts.map((post, idx) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.slug}`}
                  data-testid={`blog-card-${post.slug}`}
                  className={`group bg-white rounded-xl overflow-hidden border border-stone-200 card-hover ${
                    idx === 0 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className={`${idx === 0 ? "grid grid-cols-1 md:grid-cols-2" : ""}`}>
                    <div className={`overflow-hidden ${idx === 0 ? "aspect-auto md:aspect-[4/3]" : "aspect-[16/9]"}`}>
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 lg:p-8 flex flex-col justify-center">
                      {post.category && (
                        <span className="text-xs tracking-[0.15em] uppercase font-bold text-orange-600 mb-3">
                          {post.category}
                        </span>
                      )}
                      <h2
                        className={`font-semibold tracking-tight text-emerald-900 group-hover:text-orange-600 transition-colors ${
                          idx === 0 ? "text-2xl md:text-3xl" : "text-xl"
                        }`}
                        style={{ fontFamily: "'Outfit', sans-serif" }}
                      >
                        {post.title}
                      </h2>
                      <p className="mt-3 text-sm text-stone-500 leading-relaxed line-clamp-3">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center gap-4 text-xs text-stone-400">
                        <span className="flex items-center gap-1">
                          <User className="w-3 h-3" />
                          {post.author}
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(post.created_at).toLocaleDateString("en-IN", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </span>
                      </div>
                      <div className="mt-4 flex items-center gap-1 text-sm font-medium text-emerald-900 group-hover:text-orange-600 transition-colors">
                        Read Article
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
