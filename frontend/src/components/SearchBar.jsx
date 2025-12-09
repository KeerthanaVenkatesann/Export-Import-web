// import React, { useState, useEffect } from "react";

// export default function SearchBar({ onSearch }) {
//   const [query, setQuery] = useState("");

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       onSearch(query);
//     }, 500); // debounce
//     return () => clearTimeout(timeout);
//   }, [query, onSearch]);

//   return (
//     <input
//       type="text"
//       className="form-control"
//       placeholder="Search products..."
//       value={query}
//       onChange={(e) => setQuery(e.target.value)}
//     />
//   );
// }
import React, { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      onSearch(query);
    }, 500); // debounce
    return () => clearTimeout(timeout);
  }, [query]); // ❌ remove onSearch from deps

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
