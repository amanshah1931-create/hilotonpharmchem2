import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, Loader2, CheckCircle } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";
import ScrollReveal from "@/components/ScrollReveal";
import SEO from "@/components/SEO";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", company: "", email: "", phone: "", product_interest: "", message: "" });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  const handleSelectChange = (value) => setFormData((prev) => ({ ...prev, product_interest: value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) { toast.error("Please fill in your name and email."); return; }
    setSubmitting(true);
    try {
      await axios.post(`${API}/inquiries`, formData);
      setSubmitted(true);
      toast.success("Inquiry submitted successfully!");
      setFormData({ name: "", company: "", email: "", phone: "", product_interest: "", message: "" });
    } catch (err) { toast.error("Failed to submit. Please try again."); }
    finally { setSubmitting(false); }
  };

  return (
    <div data-testid="contact-page">
      <SEO
        title="Contact Hilton Pharma Chem | Request an Ayurvedic Manufacturing Quote"
        description="Get in touch with Hilton Pharma Chem for third-party Ayurvedic and pharmaceutical manufacturing. Plant in Sidhpur, Gujarat; corporate office in Ahmedabad. Call +91-9328119224."
        path="/contact"
      />
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28" style={{ background: "#022c22" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <span className="text-xs tracking-[0.2em] uppercase font-bold text-[#d4a017] mb-4 block font-['DM_Sans']">Get In Touch</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white">Contact Us</h1>
            <p className="mt-4 text-lg text-emerald-200/70 max-w-2xl font-['DM_Sans']">
              Ready to discuss your manufacturing requirements? Fill out the form or reach us directly.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="py-20 lg:py-28" style={{ background: "#f9fafb" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left: Contact Info + Map */}
            <ScrollReveal>
              <div data-testid="contact-info" className="space-y-8">
                <div>
                  <h3 className="text-xl font-semibold text-[#064e3b] mb-6">Contact Information</h3>
                  <div className="space-y-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#064e3b] flex items-center justify-center flex-shrink-0"><Phone className="w-5 h-5 text-white" /></div>
                      <div><p className="text-sm font-medium text-gray-700 font-['DM_Sans']">Phone</p><a href="tel:9328119224" data-testid="contact-info-phone" className="text-base text-gray-600 hover:text-[#d4a017] transition-colors font-['DM_Sans']">+91 9328119224</a></div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-xl bg-[#064e3b] flex items-center justify-center flex-shrink-0"><Mail className="w-5 h-5 text-white" /></div>
                      <div><p className="text-sm font-medium text-gray-700 font-['DM_Sans']">Email</p><a href="mailto:info@hiltonpharmachem.com" data-testid="contact-info-email" className="text-base text-gray-600 hover:text-[#d4a017] transition-colors font-['DM_Sans']">info@hiltonpharmachem.com</a></div>
                    </div>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-8">
                  <h3 className="text-xl font-semibold text-[#064e3b] mb-6">Our Locations</h3>
                  <div className="space-y-5">
                    {[{ label: "Manufacturing Plant", addr: "Sidhpur, Patan, Gujarat, India", badge: "GMP & ISO Certified" }, { label: "Corporate Office", addr: "Ahmedabad, Gujarat, India" }].map((loc) => (
                      <div key={loc.label} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-[#d4a017]/10 flex items-center justify-center flex-shrink-0"><MapPin className="w-5 h-5 text-[#d4a017]" /></div>
                        <div>
                          <p className="text-sm font-semibold text-gray-700 font-['DM_Sans']">{loc.label}</p>
                          <p className="text-sm text-gray-500 mt-0.5 font-['DM_Sans']">{loc.addr}</p>
                          {loc.badge && <span className="inline-block mt-2 px-2 py-0.5 bg-[#064e3b]/5 text-[#064e3b] rounded text-xs font-medium font-['DM_Sans']">{loc.badge}</span>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                {/* Map Placeholder */}
                <div className="border-t border-gray-200 pt-8">
                  <div data-testid="map-placeholder" className="w-full h-56 bg-gray-100 rounded-xl border border-gray-200 flex items-center justify-center overflow-hidden">
                    <iframe
                      title="Hilton Pharma Chem Manufacturing Plant Location - Sidhpur, Gujarat"
                      src="https://www.google.com/maps?q=Sidhpur,+Patan,+Gujarat,+India&output=embed"
                      width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                    />
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Right: Form */}
            <ScrollReveal delay={200}>
              <div className="card-premium p-8 lg:p-10">
                <h2 className="text-2xl font-semibold text-[#064e3b] mb-2">Send Us an Inquiry</h2>
                <p className="text-sm text-gray-500 mb-8 font-['DM_Sans']">Our team will respond within 24 hours.</p>

                {submitted ? (
                  <div data-testid="contact-success-message" className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-[#064e3b] mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-[#064e3b]">Inquiry Received</h3>
                    <p className="mt-2 text-gray-500 font-['DM_Sans']">We will get back to you within 24 hours.</p>
                    <button data-testid="contact-submit-another-btn" onClick={() => setSubmitted(false)} className="btn-primary mt-6">Submit Another Inquiry</button>
                  </div>
                ) : (
                  <form data-testid="contact-form" onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-gray-700 font-['DM_Sans']">Full Name <span className="text-red-500">*</span></Label>
                        <Input id="name" name="name" value={formData.name} onChange={handleChange} data-testid="contact-name-input" placeholder="Your full name" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium text-gray-700 font-['DM_Sans']">Company Name</Label>
                        <Input id="company" name="company" value={formData.company} onChange={handleChange} data-testid="contact-company-input" placeholder="Your company" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-gray-700 font-['DM_Sans']">Email <span className="text-red-500">*</span></Label>
                        <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} data-testid="contact-email-input" placeholder="you@company.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-gray-700 font-['DM_Sans']">Phone</Label>
                        <Input id="phone" name="phone" value={formData.phone} onChange={handleChange} data-testid="contact-phone-input" placeholder="+91 XXXXX XXXXX" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label className="text-sm font-medium text-gray-700 font-['DM_Sans']">Product Interest</Label>
                      <Select onValueChange={handleSelectChange} value={formData.product_interest}>
                        <SelectTrigger data-testid="contact-product-select"><SelectValue placeholder="Select product category" /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="ointments-creams">Ointments & Creams</SelectItem>
                          <SelectItem value="syrups-liquids">Syrups & Liquids</SelectItem>
                          <SelectItem value="oils">Oils</SelectItem>
                          <SelectItem value="tablets-capsules">Tablets & Capsules</SelectItem>
                          <SelectItem value="herbal-powders">Herbal Powders</SelectItem>
                          <SelectItem value="winter">Winter Products</SelectItem>
                          <SelectItem value="custom">Custom Formulation</SelectItem>
                          <SelectItem value="multiple">Multiple Categories</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-gray-700 font-['DM_Sans']">Message</Label>
                      <Textarea id="message" name="message" value={formData.message} onChange={handleChange} data-testid="contact-message-input"
                        placeholder="Tell us about your requirements, expected volumes, target market..." rows={5} />
                    </div>
                    <button type="submit" data-testid="contact-submit-btn" disabled={submitting} className="btn-primary w-full justify-center text-base">
                      {submitting ? <><Loader2 className="w-4 h-4 animate-spin" /> Submitting...</> : "Submit Inquiry"}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
