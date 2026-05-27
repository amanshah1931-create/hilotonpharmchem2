import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Trash2, PenLine, Eye, Mail, Phone, Building2, Package, Calendar, Loader2, LayoutDashboard, FileText, Inbox } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

function AdminTabs({ active, onChange }) {
  const tabs = [
    { id: "inquiries", label: "Inquiries", icon: Inbox },
    { id: "blogs", label: "Blog Posts", icon: FileText },
  ];
  return (
    <div className="flex items-center gap-1 border-b border-gray-200 mb-8" data-testid="admin-tabs">
      {tabs.map((t) => (
        <button
          key={t.id}
          data-testid={`admin-tab-${t.id}`}
          onClick={() => onChange(t.id)}
          className={`flex items-center gap-2 px-5 py-3 text-sm font-medium border-b-2 transition-colors font-['DM_Sans'] ${
            active === t.id ? "border-[#064e3b] text-[#064e3b]" : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          <t.icon className="w-4 h-4" /> {t.label}
        </button>
      ))}
    </div>
  );
}

function InquiriesPanel() {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchInquiries = async () => {
    try {
      const res = await axios.get(`${API}/inquiries`);
      setInquiries(res.data);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchInquiries(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this inquiry?")) return;
    try {
      await axios.delete(`${API}/inquiries/${id}`);
      setInquiries((prev) => prev.filter((i) => i.id !== id));
      toast.success("Inquiry deleted");
    } catch (err) { toast.error("Failed to delete"); }
  };

  if (loading) return <div className="flex items-center justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>;

  return (
    <div data-testid="inquiries-panel">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#064e3b]">Inquiries ({inquiries.length})</h2>
      </div>
      {inquiries.length === 0 ? (
        <div className="text-center py-16 text-gray-400"><Inbox className="w-12 h-12 mx-auto mb-3 opacity-50" /><p>No inquiries yet</p></div>
      ) : (
        <div className="space-y-4">
          {inquiries.map((inq) => (
            <div key={inq.id} data-testid={`inquiry-card-${inq.id}`} className="card-premium p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-base font-semibold text-[#1a1a1a]">{inq.name}</h3>
                    {inq.company && (
                      <span className="inline-flex items-center gap-1 text-xs text-gray-500 font-['DM_Sans']">
                        <Building2 className="w-3 h-3" /> {inq.company}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 font-['DM_Sans']">
                    <span className="inline-flex items-center gap-1"><Mail className="w-3.5 h-3.5" /> {inq.email}</span>
                    {inq.phone && <span className="inline-flex items-center gap-1"><Phone className="w-3.5 h-3.5" /> {inq.phone}</span>}
                    {inq.product_interest && <span className="inline-flex items-center gap-1"><Package className="w-3.5 h-3.5" /> {inq.product_interest}</span>}
                    <span className="inline-flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {new Date(inq.created_at).toLocaleDateString()}</span>
                  </div>
                  {inq.message && <p className="mt-3 text-sm text-gray-600 leading-relaxed bg-gray-50 p-3 rounded-lg font-['DM_Sans']">{inq.message}</p>}
                </div>
                <button onClick={() => handleDelete(inq.id)} data-testid={`delete-inquiry-${inq.id}`}
                  className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors flex-shrink-0">
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function BlogsPanel() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchPosts = async () => {
    try {
      const res = await axios.get(`${API}/blogs`);
      setPosts(res.data);
    } catch (err) { console.error(err); }
    finally { setLoading(false); }
  };

  useEffect(() => { fetchPosts(); }, []);

  const handleDelete = async (id) => {
    if (!window.confirm("Delete this blog post?")) return;
    try {
      await axios.delete(`${API}/blogs/${id}`);
      setPosts((prev) => prev.filter((p) => p.id !== id));
      toast.success("Blog post deleted");
    } catch (err) { toast.error("Failed to delete"); }
  };

  if (loading) return <div className="flex items-center justify-center py-20"><Loader2 className="w-6 h-6 animate-spin text-gray-400" /></div>;

  return (
    <div data-testid="blogs-panel">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-[#064e3b]">Blog Posts ({posts.length})</h2>
        <Link to="/blog/write">
          <button className="btn-primary text-sm"><PenLine className="w-4 h-4" /> Write New Post</button>
        </Link>
      </div>
      {posts.length === 0 ? (
        <div className="text-center py-16 text-gray-400"><FileText className="w-12 h-12 mx-auto mb-3 opacity-50" /><p>No blog posts yet</p></div>
      ) : (
        <div className="space-y-4">
          {posts.map((post) => (
            <div key={post.id} data-testid={`blog-admin-card-${post.id}`} className="card-premium p-5">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-start gap-4 flex-1 min-w-0">
                  {post.image_url && (
                    <img src={post.image_url} alt="" className="w-20 h-14 object-cover rounded-lg flex-shrink-0 border border-gray-200" />
                  )}
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-[#1a1a1a] truncate">{post.title}</h3>
                    <div className="flex items-center gap-3 mt-1 text-xs text-gray-500 font-['DM_Sans']">
                      {post.category && <span className="px-2 py-0.5 bg-[#064e3b]/5 text-[#064e3b] rounded font-medium">{post.category}</span>}
                      <span>{post.author}</span>
                      <span>{new Date(post.created_at).toLocaleDateString()}</span>
                    </div>
                    <p className="mt-2 text-sm text-gray-500 line-clamp-2 font-['DM_Sans']">{post.excerpt}</p>
                  </div>
                </div>
                <div className="flex items-center gap-1 flex-shrink-0">
                  <Link to={`/blog/${post.slug}`} className="p-2 text-gray-400 hover:text-[#064e3b] hover:bg-emerald-50 rounded-lg transition-colors">
                    <Eye className="w-4 h-4" />
                  </Link>
                  <button onClick={() => handleDelete(post.id)} data-testid={`delete-blog-${post.id}`}
                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors">
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Admin() {
  const [tab, setTab] = useState("inquiries");

  return (
    <div data-testid="admin-page">
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-2">
            <LayoutDashboard className="w-6 h-6 text-[#064e3b]" />
            <h1 className="text-2xl md:text-3xl font-semibold text-[#064e3b]">Admin Dashboard</h1>
          </div>
          <p className="text-sm text-gray-500 font-['DM_Sans']">Manage inquiries, blog posts, and site content.</p>
        </div>
      </section>
      <section className="py-8 lg:py-12" style={{ background: "#f9fafb" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <AdminTabs active={tab} onChange={setTab} />
          {tab === "inquiries" && <InquiriesPanel />}
          {tab === "blogs" && <BlogsPanel />}
        </div>
      </section>
    </div>
  );
}
