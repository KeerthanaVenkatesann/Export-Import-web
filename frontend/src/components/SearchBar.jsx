import React, { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query);
    }, 500);
    return () => clearTimeout(timeout);
  }, [query]);

  return (
    <input
      type="text"
      className="form-control"
      placeholder="Search products..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
    />
  );
}
