import React from "react";

export default function ProductCard({ product }) {
  const whatsappMessage = `Hello, I am interested in ${product.name} priced at ₹${product.price}. Is it available?`;
  const whatsappLink = `https://wa.me/919597363802?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  return (
    <div
      className="product-card shadow-sm"
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        background: "#fff",
        width: "100%",
        maxWidth: "320px",
        transition: "all 0.25s ease",
      }}
    >
      {/* Product Image */}
      <div style={{ height: "200px", overflow: "hidden" }}>
        <img
          src={product.image}
          alt={product.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "0.3s",
          }}
          className="product-image"
        />
      </div>

      {/* Card Body */}
      <div className="p-3">
        <h5 className="fw-bold">{product.name}</h5>

        <p className="text-muted mb-1">
          <strong>Category:</strong> {product.category}
        </p>

        <p className="mb-2">
          <strong>Price:</strong>{" "}
          <span className="text-success fw-semibold">₹{product.price}</span>
        </p>

        <span
          className={`badge px-3 py-2 ${
            product.available ? "bg-success" : "bg-secondary"
          }`}
          style={{ borderRadius: "12px", fontSize: "0.8rem" }}
        >
          {product.available ? "In Stock" : "Out of Stock"}
        </span>

        <div className="d-grid mt-3">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-success"
            style={{
              borderRadius: "10px",
              padding: "10px",
              fontWeight: "600",
              fontSize: "0.95rem",
            }}
          >
            Enquiry on WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
}
