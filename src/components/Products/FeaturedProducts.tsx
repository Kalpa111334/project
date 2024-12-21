import React, { useEffect, useState } from 'react';
import { seafoodProducts, SeafoodProduct } from '../../data/seafoodProducts';
import { Link } from 'react-router-dom';

const FeaturedProducts: React.FC = () => {
  const [featured, setFeatured] = useState<SeafoodProduct[]>([]);

  useEffect(() => {
    // Function to shuffle array
    const shuffleArray = (array: SeafoodProduct[]) => {
      const newArray = [...array];
      for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
      }
      return newArray;
    };

    // Initial shuffle
    setFeatured(shuffleArray(seafoodProducts).slice(0, 4));

    // Rotate products every 10 seconds
    const interval = setInterval(() => {
      setFeatured(shuffleArray(seafoodProducts).slice(0, 4));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {featured.map((product) => (
        <div key={product.id} className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-transform duration-300 hover:scale-105">
          <div className="relative h-64">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 rounded-full text-sm">
              ${product.price}
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
            <p className="text-gray-600 text-sm mb-2">{product.description}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">Origin: {product.origin}</span>
              <Link
                to={`/products/${product.id}`}
                className="inline-flex items-center px-3 py-1 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-700 transition-colors"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeaturedProducts;
