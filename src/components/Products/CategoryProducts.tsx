import React, { useState, useEffect } from 'react';
import { seafoodProducts, categories, SeafoodProduct } from '../../data/seafoodProducts';
import { Link } from 'react-router-dom';

const CategoryProducts: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>(categories[0]);
  const [highlightedProduct, setHighlightedProduct] = useState<string | null>(null);

  // Rotate through categories automatically
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCategory(prev => {
        const currentIndex = categories.indexOf(prev as any);
        return categories[(currentIndex + 1) % categories.length];
      });
    }, 8000); // Change category every 8 seconds

    return () => clearInterval(interval);
  }, []);

  // Highlight random products within the active category
  useEffect(() => {
    const productsInCategory = seafoodProducts.filter(p => p.category === activeCategory);
    const highlightProduct = () => {
      const randomProduct = productsInCategory[Math.floor(Math.random() * productsInCategory.length)];
      setHighlightedProduct(randomProduct.id);
    };

    highlightProduct(); // Initial highlight
    const interval = setInterval(highlightProduct, 3000); // Change highlight every 3 seconds

    return () => clearInterval(interval);
  }, [activeCategory]);

  return (
    <div className="w-full">
      {/* Category Navigation */}
      <div className="flex overflow-x-auto mb-8 pb-2 scrollbar-hide">
        <div className="flex space-x-4">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full whitespace-nowrap transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-blue-600 text-white shadow-lg transform scale-105'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {seafoodProducts
          .filter(product => product.category === activeCategory)
          .map(product => (
            <div
              key={product.id}
              className={`bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-500 ${
                highlightedProduct === product.id ? 'scale-105 ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="relative h-64">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute top-2 right-2 bg-blue-600 text-white px-3 py-1 rounded-full">
                  ${product.price.toFixed(2)}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{product.description}</p>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Origin:</span> {product.origin}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Freshness:</span> {product.freshness}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <span className="font-medium mr-2">Preparation:</span> {product.preparation}
                  </div>
                </div>
                <Link
                  to={`/products/${product.id}`}
                  className="mt-4 inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
