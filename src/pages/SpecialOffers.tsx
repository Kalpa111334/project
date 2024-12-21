import React from 'react';
import { Link } from 'react-router-dom';
import { seafoodProducts } from '../data/seafoodProducts';

const specialOffers = seafoodProducts.map(product => ({
  ...product,
  discountPercentage: Math.floor(Math.random() * 30) + 10, // Random discount between 10-40%
})).slice(0, 6); // Show only 6 special offers

const SpecialOffers = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Special Offers</h1>
        <p className="text-gray-600">Limited time deals on premium seafood</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {specialOffers.map((product) => {
          const discountedPrice = product.price * (1 - product.discountPercentage / 100);
          
          return (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-0 right-0 bg-red-600 text-white px-3 py-1 rounded-bl-lg">
                  {product.discountPercentage}% OFF
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>
                
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-gray-500 line-through">
                      LKR {product.price.toLocaleString('en-LK')}
                    </span>
                    <span className="text-2xl font-bold text-red-600 ml-2">
                      LKR {discountedPrice.toLocaleString('en-LK')}
                    </span>
                  </div>
                  <span className="text-sm text-gray-500">
                    {product.origin}
                  </span>
                </div>

                <Link
                  to={`/products/${product.id}`}
                  className="block w-full text-center bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  View Details
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-12">
        <Link
          to="/products"
          className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          View All Products
        </Link>
      </div>
    </div>
  );
};

export default SpecialOffers;
