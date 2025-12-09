import React, { useEffect, useState } from "react";
import { fetchProducts } from "../api";
import ProductCard from "./ProductCard";
import Spinner from "./Spinner";
import SearchBar from "./SearchBar";
import FilterBar from "./FilterBar";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState({});

  const loadProducts = async () => {
    setLoading(true);

    try {
      const { data } = await fetchProducts(filters);
      const items = data.results || data; // <-- IMPORTANT FIX
      setProducts(items);
    } catch (err) {
      console.error("Frontend Error:", err);
      setProducts([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    loadProducts();
  }, [filters]);

  const handleSearch = (query) => {
    setFilters((prev) => {
      if ((prev.search || "") === (query || "")) return prev;
      return { ...prev, search: query };
    });
  };

  const handleFilter = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="container my-4">
      {/* search + filters */}
      <div className="d-flex flex-column flex-md-row gap-3 mb-3 justify-content-center">
        <SearchBar onSearch={handleSearch} />
        <FilterBar onFilter={handleFilter} />
      </div>

      {/* content */}
      {loading ? (
        <Spinner />
      ) : products.length === 0 ? (
        <div className="text-center text-muted py-5">
          <h5>No products found</h5>
          <p>Try adjusting your search or filters.</p>
        </div>
      ) : (
      
        <div className="row g-4 justify-content-center">
          {products.map((p) => (
            <div
              key={p.id}
              className="col-12 col-sm-6 col-md-4 col-lg-3 d-flex justify-content-center"
            >
              <ProductCard product={p} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
