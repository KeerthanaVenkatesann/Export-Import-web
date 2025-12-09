import React from "react";
import ProductList from "./components/ProductList";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div>
      <Navbar />

      <style>{`html { scroll-behavior: smooth; }`}</style>
               
      {/* HERO / HOME */}
      <section id="home" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container text-center">
          <h1 className="display-5 fw-bold mb-3">Premium Spices & Agro Products</h1>
          <p className="lead mb-0">
            Foodfly Traders – sourcing quality spices, fruits and vegetables for global markets.
          </p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="py-5">
        <div className="container">
          <h2 className="mb-3">About Us</h2>
          <p className="text-muted">
            We are a trading company dealing in spices, pulses, fruits and vegetables,
            focusing on quality sourcing and on-time delivery for our clients.
          </p>
        </div>
      </section>

      {/* PRODUCTS (your existing list) */}
      <section id="products" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h2 className="mb-4">Our Products</h2>
          <ProductList />
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-5">
        <div className="container">
          <h2 className="mb-3">FAQ</h2>
          <p className="text-muted">You can put 3–4 common questions here later.</p>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <div className="container">
          <h2 className="mb-3">Contact Us</h2>
          <p className="mb-1"><strong>WhatsApp:</strong> +91 95973 63802</p>
          <p className="mb-1"><strong>Email:</strong> info@foodflytraders.com</p>
          <p className="mb-0 text-muted">Add address / contact form later.</p>
        </div>
      </section>

      <footer className="text-center text-muted py-3">
        <small>© {new Date().getFullYear()} Foodfly Traders</small>
      </footer>
    </div>
  );
}
