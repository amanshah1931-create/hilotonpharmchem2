import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select, SelectContent, SelectItem, SelectTrigger, SelectValue,
} from "@/components/ui/select";
import { ArrowLeft, Bold, Italic, Heading2, Heading3, List, Loader2, Eye, Pencil, ImageIcon } from "lucide-react";
import { toast } from "sonner";
import { adminApi, isAuthed } from "@/lib/adminAuth";
import AdminGate from "@/components/AdminGate";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function insertTag(textarea, openTag, closeTag) {
  const start = textarea.selectionStart;
  const end = textarea.selectionEnd;
  const text = textarea.value;
  const selected = text.substring(start, end);
  const replacement = `${openTag}${selected}${closeTag}`;
  textarea.setRangeText(replacement, start, end, "end");
  return textarea.value;
}

export default function BlogWrite() {
  const navigate = useNavigate();
  const [authed, setAuthed] = useState(isAuthed());
  const [formData, setFormData] = useState({
    title: "",
    slug: "",
    category: "",
    excerpt: "",
    content: "",
    image_url: "",
    author: "Hilton Pharma Chem",
  });
  const [submitting, setSubmitting] = useState(false);
  const [preview, setPreview] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
      ...(name === "title" ? { slug: slugify(value) } : {}),
    }));
  };

  const handleFormat = (tag) => {
    const textarea = document.getElementById("blog-content-editor");
    if (!textarea) return;
    const tags = {
      bold: ["<strong>", "</strong>"],
      italic: ["<em>", "</em>"],
      h2: ["<h2>", "</h2>"],
      h3: ["<h3>", "</h3>"],
      p: ["<p>", "</p>"],
      ul: ["<ul>\n<li>", "</li>\n</ul>"],
      img: ['<img src="', '" alt="" style="max-width:100%;border-radius:8px;margin:1rem 0;" />'],
    };
    const [open, close] = tags[tag] || ["", ""];
    const newVal = insertTag(textarea, open, close);
    setFormData((prev) => ({ ...prev, content: newVal }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.title || !formData.content) {
      toast.error("Title and content are required.");
      return;
    }
    setSubmitting(true);
    try {
      const payload = {
        ...formData,
        slug: formData.slug || slugify(formData.title),
      };
      await adminApi.post(`/blogs`, payload);
      toast.success("Blog post published successfully!");
      navigate("/blog");
    } catch (err) {
      console.error("Failed to publish blog:", err);
      if (err.response && err.response.status === 401) {
        toast.error("Your session expired. Please log in again.");
        setAuthed(false);
      } else {
        toast.error("Failed to publish. Please try again.");
      }
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <AdminGate authed={authed} onAuthed={() => setAuthed(true)}>
    <div data-testid="blog-write-page">
      {/* Header */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12 bg-white border-b border-stone-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to="/blog"
            data-testid="back-to-blog-link"
            className="inline-flex items-center gap-2 text-sm text-stone-500 hover:text-emerald-900 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <h1
            className="text-3xl md:text-4xl font-semibold tracking-tight text-emerald-950"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Write a Blog Post
          </h1>
          <p className="mt-2 text-sm text-stone-500">
            Share industry insights, manufacturing knowledge, and Ayurvedic expertise.
          </p>
        </div>
      </section>

      {/* Editor */}
      <section className="py-8 lg:py-12 bg-stone-50 min-h-[60vh]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <form onSubmit={handleSubmit} data-testid="blog-write-form" className="space-y-6">
            {/* Title */}
            <div className="space-y-2">
              <Label htmlFor="title" className="text-sm font-medium text-stone-700">
                Post Title <span className="text-red-500">*</span>
              </Label>
              <Input
                id="title"
                name="title"
                value={formData.title}
                onChange={handleChange}
                data-testid="blog-title-input"
                placeholder="Enter your blog post title"
                className="text-lg border-stone-300 focus:ring-[#d4a017] focus:border-[#d4a017]"
                required
              />
              {formData.slug && (
                <p className="text-xs text-stone-400">
                  Slug: <span className="font-mono text-stone-500">{formData.slug}</span>
                </p>
              )}
            </div>

            {/* Category + Author */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-sm font-medium text-stone-700">Category</Label>
                <Select
                  onValueChange={(val) => setFormData((prev) => ({ ...prev, category: val }))}
                  value={formData.category}
                >
                  <SelectTrigger data-testid="blog-category-select" className="border-stone-300">
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Industry Insights">Industry Insights</SelectItem>
                    <SelectItem value="Quality Assurance">Quality Assurance</SelectItem>
                    <SelectItem value="Product Development">Product Development</SelectItem>
                    <SelectItem value="Certifications">Certifications</SelectItem>
                    <SelectItem value="Manufacturing">Manufacturing</SelectItem>
                    <SelectItem value="Ayurveda">Ayurveda</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="author" className="text-sm font-medium text-stone-700">Author</Label>
                <Input
                  id="author"
                  name="author"
                  value={formData.author}
                  onChange={handleChange}
                  data-testid="blog-author-input"
                  placeholder="Author name"
                  className="border-stone-300"
                />
              </div>
            </div>

            {/* Featured Image */}
            <div className="space-y-2">
              <Label htmlFor="image_url" className="text-sm font-medium text-stone-700">Featured Image URL</Label>
              <Input
                id="image_url"
                name="image_url"
                value={formData.image_url}
                onChange={handleChange}
                data-testid="blog-image-input"
                placeholder="https://example.com/image.jpg"
                className="border-stone-300"
              />
              {formData.image_url && (
                <img src={formData.image_url} alt="Preview" className="w-full max-h-48 object-cover rounded-lg mt-2 border border-stone-200" />
              )}
            </div>

            {/* Excerpt */}
            <div className="space-y-2">
              <Label htmlFor="excerpt" className="text-sm font-medium text-stone-700">
                Excerpt <span className="text-xs text-stone-400 font-normal">(Short summary for blog listing)</span>
              </Label>
              <Textarea
                id="excerpt"
                name="excerpt"
                value={formData.excerpt}
                onChange={handleChange}
                data-testid="blog-excerpt-input"
                placeholder="A brief summary of this blog post (2-3 sentences)"
                rows={3}
                className="border-stone-300"
              />
            </div>

            {/* Content Editor */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label className="text-sm font-medium text-stone-700">
                  Content <span className="text-red-500">*</span>
                </Label>
                <button
                  type="button"
                  onClick={() => setPreview(!preview)}
                  data-testid="blog-preview-toggle"
                  className="relative z-10 inline-flex items-center gap-1.5 text-xs font-medium text-emerald-700 hover:text-[#d4a017] transition-colors px-2 py-1 rounded-md hover:bg-stone-100"
                >
                  {preview ? <Pencil className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
                  {preview ? "Edit" : "Preview"}
                </button>
              </div>

              {/* Formatting Toolbar */}
              {!preview && (
                <div className="flex items-center gap-1 bg-white border border-stone-300 border-b-0 rounded-t-lg px-2 py-1.5" data-testid="formatting-toolbar">
                  {[
                    { icon: Bold, tag: "bold", label: "Bold" },
                    { icon: Italic, tag: "italic", label: "Italic" },
                    { icon: Heading2, tag: "h2", label: "Heading 2" },
                    { icon: Heading3, tag: "h3", label: "Heading 3" },
                    { icon: List, tag: "ul", label: "List" },
                    { icon: ImageIcon, tag: "img", label: "Image" },
                  ].map((btn) => (
                    <button
                      key={btn.tag}
                      type="button"
                      onClick={() => handleFormat(btn.tag)}
                      title={btn.label}
                      className="p-1.5 rounded hover:bg-stone-100 text-stone-500 hover:text-emerald-900 transition-colors"
                    >
                      <btn.icon className="w-4 h-4" />
                    </button>
                  ))}
                  <div className="h-5 w-px bg-stone-200 mx-1" />
                  <button
                    type="button"
                    onClick={() => handleFormat("p")}
                    className="px-2 py-1 rounded text-xs font-medium hover:bg-stone-100 text-stone-500 hover:text-emerald-900 transition-colors"
                  >
                    Paragraph
                  </button>
                </div>
              )}

              {preview ? (
                <div
                  data-testid="blog-content-preview"
                  className="bg-white border border-stone-300 rounded-lg p-6 min-h-[300px] blog-content"
                  dangerouslySetInnerHTML={{ __html: formData.content || "<p class='text-stone-400'>Nothing to preview yet...</p>" }}
                />
              ) : (
                <Textarea
                  id="blog-content-editor"
                  name="content"
                  value={formData.content}
                  onChange={handleChange}
                  data-testid="blog-content-input"
                  placeholder="Write your blog post content here. You can use HTML tags for formatting.&#10;&#10;Example:&#10;<h2>Section Title</h2>&#10;<p>Your paragraph text here...</p>&#10;<strong>Bold text</strong>"
                  rows={15}
                  className={`border-stone-300 font-mono text-sm ${!preview ? "rounded-t-none" : ""}`}
                  required
                />
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-between pt-4 border-t border-stone-200">
              <Link to="/blog" className="text-sm text-stone-500 hover:text-stone-700">
                Cancel
              </Link>
              <Button
                type="submit"
                data-testid="blog-publish-btn"
                disabled={submitting}
                className="bg-emerald-900 hover:bg-emerald-800 text-white px-8 py-2.5 rounded-full"
              >
                {submitting ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" /> Publishing...
                  </>
                ) : (
                  "Publish Post"
                )}
              </Button>
            </div>
          </form>
        </div>
      </section>
    </div>
    </AdminGate>
  );
}
