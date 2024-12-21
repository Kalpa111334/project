import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Eye } from 'lucide-react';
import { seafoodProducts } from '../data/seafoodProducts';
import ImageSlider from '../components/ImageSlider/ImageSlider';
import QuickView from '../components/QuickView/QuickView';

const Home = () => {
  const featuredProducts = seafoodProducts.slice(0, 4);
  const [selectedProduct, setSelectedProduct] = useState<typeof seafoodProducts[0] | null>(null);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);

  const handleQuickView = (product: typeof seafoodProducts[0]) => {
    setSelectedProduct(product);
    setIsQuickViewOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Hero Section with Image Slider */}
      <section className="relative">
        <ImageSlider />
      </section>

      {/* Featured Products */}
      <section className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-6">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group relative"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <button
                  onClick={() => handleQuickView(product)}
                  className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100"
                >
                  <span className="bg-white text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <Eye className="w-4 h-4" />
                    Quick View
                  </span>
                </button>
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">{product.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-bold">
                    LKR {product.price.toLocaleString('en-LK')}
                  </span>
                  <Link
                    to={`/products/${product.id}`}
                    className="text-purple-600 hover:text-purple-700 font-medium"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link
            to="/products"
            className="inline-block bg-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
          >
            View All Products
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-3">Fresh Delivery</h3>
          <p className="text-gray-600">
            Same-day delivery to ensure maximum freshness of your seafood.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-3">Quality Guaranteed</h3>
          <p className="text-gray-600">
            All our products are carefully selected and quality-checked.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="font-semibold text-lg mb-3">Expert Support</h3>
          <p className="text-gray-600">
            Our seafood experts are available to help with your selection.
          </p>
        </div>
      </section>

      {/* Quick View Modal */}
      <QuickView
        product={selectedProduct}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </div>
  );
};

export default Home;