import React from 'react';
import { useWishlist } from '../context/WishlistContext';
import { Link } from 'react-router-dom';
import { Heart, X, Loader, Trash2 } from 'lucide-react';

interface WishlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const WishlistModal: React.FC<WishlistModalProps> = ({ isOpen, onClose }) => {
  const { wishlist, removeFromWishlist, clearWishlist, error, isLoading } = useWishlist();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[80vh] overflow-y-auto relative">
        {isLoading && (
          <div className="absolute inset-0 bg-white bg-opacity-75 flex items-center justify-center z-10">
            <Loader className="w-8 h-8 animate-spin text-blue-600" />
          </div>
        )}
        
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold flex items-center">
            <Heart className="w-6 h-6 mr-2" /> My Wishlist
            {wishlist.length > 0 && (
              <span className="ml-2 text-sm text-gray-500">
                ({wishlist.length} items)
              </span>
            )}
          </h2>
          <div className="flex items-center space-x-2">
            {wishlist.length > 0 && (
              <button
                onClick={() => clearWishlist()}
                className="text-red-600 hover:text-red-700 p-2"
                title="Clear wishlist"
              >
                <Trash2 className="w-5 h-5" />
              </button>
            )}
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 p-2"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md mb-4">
            {error}
          </div>
        )}
        
        {wishlist.length === 0 ? (
          <div className="text-center py-8">
            <Heart className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p className="text-gray-500 mb-2">Your wishlist is empty</p>
            <Link
              to="/products"
              className="text-blue-600 hover:text-blue-700 mt-2 inline-block"
              onClick={onClose}
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {wishlist.map((product) => (
              <div
                key={product.id}
                className="flex items-center space-x-4 border rounded-lg p-4 hover:shadow-md transition-shadow duration-200"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-24 h-24 object-cover rounded-md"
                />
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{product.name}</h3>
                  <p className="text-blue-600 font-bold">${product.price}</p>
                  <div className="flex space-x-2 mt-2">
                    <Link
                      to={`/product/${product.id}`}
                      className="text-blue-600 hover:text-blue-700 text-sm"
                      onClick={onClose}
                    >
                      View Details
                    </Link>
                    <button
                      onClick={() => removeFromWishlist(product.id)}
                      className="text-red-600 hover:text-red-700 text-sm"
                      disabled={isLoading}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};
