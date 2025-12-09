import React from "react";

export default function FilterBar({ onFilter }) {
  return (
    <div className="d-flex gap-3">
      <select className="form-select" onChange={(e) => onFilter("category", e.target.value)}>
        <option value="">All Categories</option>
        <option value="Spices">Spices</option>
        <option value="Fruits">Fruits</option>
        <option value="Vegetables">Vegetables</option>
      </select>

      <select className="form-select" onChange={(e) => onFilter("available", e.target.value)}>
        <option value="">Availability</option>
        <option value="true">In Stock</option>
        <option value="false">Out of Stock</option>
      </select>
    </div>
  );
}
