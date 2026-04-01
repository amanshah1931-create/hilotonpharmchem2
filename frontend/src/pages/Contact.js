import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Phone, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { toast } from "sonner";
import axios from "axios";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    product_interest: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSelectChange = (value) => {
    setFormData((prev) => ({ ...prev, product_interest: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      toast.error("Please fill in your name and email address.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/inquiries`, formData);
      setSubmitted(true);
      toast.success("Inquiry submitted successfully! We will get back to you shortly.");
      setFormData({ name: "", company: "", email: "", phone: "", product_interest: "", message: "" });
    } catch (err) {
      console.error("Failed to submit inquiry:", err);
      toast.error("Failed to submit inquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div data-testid="contact-page">
      {/* Page Header */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 bg-emerald-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs tracking-[0.2em] uppercase font-bold text-orange-400 mb-4 block">
            Get In Touch
          </span>
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white"
            style={{ fontFamily: "'Outfit', sans-serif" }}
          >
            Contact Us
          </h1>
          <p className="mt-4 text-lg text-emerald-200 max-w-2xl">
            Ready to discuss your manufacturing requirements? Fill out the form below
            or reach us directly through phone or email.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 lg:py-28 bg-stone-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl border border-stone-200 p-8 lg:p-10 shadow-sm">
                <h2
                  className="text-2xl font-semibold text-emerald-900 mb-2"
                  style={{ fontFamily: "'Outfit', sans-serif" }}
                >
                  Send Us an Inquiry
                </h2>
                <p className="text-sm text-stone-500 mb-8">
                  Share your product requirements and our team will respond within 24 hours.
                </p>

                {submitted ? (
                  <div data-testid="contact-success-message" className="text-center py-12">
                    <CheckCircle className="w-16 h-16 text-emerald-600 mx-auto mb-4" />
                    <h3
                      className="text-xl font-semibold text-emerald-900"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Inquiry Received
                    </h3>
                    <p className="mt-2 text-stone-500">
                      Thank you for reaching out. Our team will get back to you within 24 hours.
                    </p>
                    <Button
                      data-testid="contact-submit-another-btn"
                      onClick={() => setSubmitted(false)}
                      className="mt-6 bg-emerald-900 hover:bg-emerald-800 text-white"
                    >
                      Submit Another Inquiry
                    </Button>
                  </div>
                ) : (
                  <form data-testid="contact-form" onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-medium text-stone-700">
                          Full Name <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          data-testid="contact-name-input"
                          placeholder="Your full name"
                          className="border-stone-300 focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="company" className="text-sm font-medium text-stone-700">
                          Company Name
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          data-testid="contact-company-input"
                          placeholder="Your company name"
                          className="border-stone-300 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="email" className="text-sm font-medium text-stone-700">
                          Email Address <span className="text-red-500">*</span>
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          data-testid="contact-email-input"
                          placeholder="you@company.com"
                          className="border-stone-300 focus:ring-orange-500 focus:border-orange-500"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-medium text-stone-700">
                          Phone Number
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          data-testid="contact-phone-input"
                          placeholder="+91 XXXXX XXXXX"
                          className="border-stone-300 focus:ring-orange-500 focus:border-orange-500"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="product_interest" className="text-sm font-medium text-stone-700">
                        Product Interest
                      </Label>
                      <Select onValueChange={handleSelectChange} value={formData.product_interest}>
                        <SelectTrigger
                          data-testid="contact-product-select"
                          className="border-stone-300 focus:ring-orange-500 focus:border-orange-500"
                        >
                          <SelectValue placeholder="Select product category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="capsules-tablets">Capsules & Tablets</SelectItem>
                          <SelectItem value="syrups-liquids">Syrups & Liquids</SelectItem>
                          <SelectItem value="oils-ointments">Oils & Ointments</SelectItem>
                          <SelectItem value="churnas-powders">Churnas & Powders</SelectItem>
                          <SelectItem value="pain-relief">Pain Relief Products</SelectItem>
                          <SelectItem value="inhalers">Inhalers</SelectItem>
                          <SelectItem value="custom">Custom Formulation</SelectItem>
                          <SelectItem value="multiple">Multiple Categories</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-medium text-stone-700">
                        Message
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        data-testid="contact-message-input"
                        placeholder="Tell us about your requirements, expected volumes, target market..."
                        rows={5}
                        className="border-stone-300 focus:ring-orange-500 focus:border-orange-500"
                      />
                    </div>
                    <Button
                      type="submit"
                      data-testid="contact-submit-btn"
                      disabled={submitting}
                      className="w-full bg-emerald-900 hover:bg-emerald-800 text-white py-3 text-base font-medium"
                    >
                      {submitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        "Submit Inquiry"
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2" data-testid="contact-info">
              <div className="space-y-8">
                <div>
                  <h3
                    className="text-lg font-semibold text-emerald-900 mb-6"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-900 flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-stone-700">Phone</p>
                        <a
                          href="tel:9328119224"
                          data-testid="contact-info-phone"
                          className="text-base text-stone-600 hover:text-orange-600 transition-colors"
                        >
                          +91 9328119224
                        </a>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-emerald-900 flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-stone-700">Email</p>
                        <a
                          href="mailto:info@hiltonpharmachem.com"
                          data-testid="contact-info-email"
                          className="text-base text-stone-600 hover:text-orange-600 transition-colors"
                        >
                          info@hiltonpharmachem.com
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-8">
                  <h3
                    className="text-lg font-semibold text-emerald-900 mb-6"
                    style={{ fontFamily: "'Outfit', sans-serif" }}
                  >
                    Our Locations
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-800 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-stone-700">Manufacturing Plant</p>
                        <p className="text-sm text-stone-500 mt-1">
                          Sidhpur, Patan, Gujarat, India
                        </p>
                        <span className="inline-block mt-2 px-2 py-0.5 bg-emerald-50 text-emerald-700 rounded text-xs font-medium">
                          GMP & ISO Certified
                        </span>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-amber-800 flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-stone-700">Corporate Office</p>
                        <p className="text-sm text-stone-500 mt-1">
                          Ahmedabad, Gujarat, India
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="border-t border-stone-200 pt-8">
                  <div className="bg-emerald-950 rounded-xl p-6">
                    <h4
                      className="text-white font-semibold mb-2"
                      style={{ fontFamily: "'Outfit', sans-serif" }}
                    >
                      Quick Response Guarantee
                    </h4>
                    <p className="text-emerald-200 text-sm leading-relaxed">
                      We respond to all manufacturing inquiries within 24 hours.
                      For urgent requirements, call us directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
