import React from 'react';

interface ProductFiltersProps {
  onSearch: (query: string) => void;
  onCategoryChange: (category: string) => void;
  onSortChange: (sort: string) => void;
}

export default function ProductFilters({ onSearch, onCategoryChange, onSortChange }: ProductFiltersProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow mb-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          placeholder="Search products..."
          onChange={(e) => onSearch(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1B4965]"
        />
        
        <select
          onChange={(e) => onCategoryChange(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1B4965]"
        >
          <option value="">All Categories</option>
          <option value="fish">Fish</option>
          <option value="shellfish">Shellfish</option>
        </select>

        <select
          onChange={(e) => onSortChange(e.target.value)}
          className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#1B4965]"
        >
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
          <option value="name">Name</option>
        </select>
      </div>
    </div>
  );
}