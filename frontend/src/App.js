import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Products from "@/pages/Products";
import ProductCategory from "@/pages/ProductCategory";
import Blog from "@/pages/Blog";
import BlogPost from "@/pages/BlogPost";
import BlogWrite from "@/pages/BlogWrite";
import Contact from "@/pages/Contact";
import ScrollToTop from "@/components/ScrollToTop";
import { Toaster } from "sonner";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen" style={{ background: "#f9fafb" }}>
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:slug" element={<ProductCategory />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/write" element={<BlogWrite />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
      <Toaster position="top-right" />
    </BrowserRouter>
  );
}

export default App;
