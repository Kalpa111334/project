import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, User, LogOut, ShoppingCart, Menu, X } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import { LoginModal } from './LoginModal';
import { WishlistModal } from './WishlistModal';

export const Navbar: React.FC = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isWishlistModalOpen, setIsWishlistModalOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { user, logout } = useAuth();
  const { wishlist } = useWishlist();

  return (
    <>
      {/* Top Bar */}
      <div className="bg-blue-600 text-white py-3">
        <div className="max-w-7xl mx-auto px-4 flex justify-end items-center space-x-6">
          {user ? (
            <>
              <button
                onClick={() => setIsWishlistModalOpen(true)}
                className="flex items-center hover:text-blue-200 transition-colors duration-200"
              >
                <Heart className="w-6 h-6 mr-2" />
                <span className="text-lg font-medium">Wishlist</span>
                {wishlist.length > 0 && (
                  <span className="ml-2 bg-white text-blue-600 rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
                    {wishlist.length}
                  </span>
                )}
              </button>
              <div className="relative group">
                <button className="flex items-center hover:text-blue-200 transition-colors duration-200">
                  <User className="w-6 h-6 mr-2" />
                  <span className="text-lg font-medium">{user.name}</span>
                </button>
                <div className="absolute right-0 mt-3 py-2 w-48 bg-white rounded-lg shadow-xl hidden group-hover:block">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
                  >
                    Profile
                  </Link>
                  <Link
                    to="/orders"
                    className="block px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
                  >
                    Orders
                  </Link>
                  <button
                    onClick={logout}
                    className="flex items-center w-full px-4 py-2 text-lg text-gray-800 hover:bg-gray-100"
                  >
                    <LogOut className="w-5 h-5 mr-2" />
                    Logout
                  </button>
                </div>
              </div>
            </>
          ) : (
            <button
              onClick={() => setIsLoginModalOpen(true)}
              className="flex items-center hover:text-blue-200 transition-colors duration-200"
            >
              <User className="w-6 h-6 mr-2" />
              <span className="text-lg font-medium">Login</span>
            </button>
          )}
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link to="/" className="logo-text flex items-center space-x-3">
                <span className="text-4xl">🦐</span>
                <span className="hidden md:inline">Lellama Online.Com</span>
                <span className="md:hidden">Lellama</span>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <Link 
                to="/products" 
                className="text-lg font-medium text-gray-700 hover:text-lellama-600 transition-colors duration-200"
              >
                Products
              </Link>
              <Link 
                to="/categories" 
                className="text-lg font-medium text-gray-700 hover:text-lellama-600 transition-colors duration-200"
              >
                Categories
              </Link>
              <Link 
                to="/special-offers" 
                className="text-lg font-medium text-gray-700 hover:text-lellama-600 transition-colors duration-200"
              >
                Special Offers
              </Link>
              <Link 
                to="/cart" 
                className="flex items-center text-lg font-medium text-gray-700 hover:text-lellama-600 transition-colors duration-200"
              >
                <ShoppingCart className="w-6 h-6 mr-1" />
                Cart
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-700 hover:text-blue-600"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4">
              <div className="flex flex-col space-y-4">
                <Link 
                  to="/products" 
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Products
                </Link>
                <Link 
                  to="/categories" 
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Categories
                </Link>
                <Link 
                  to="/special-offers" 
                  className="text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Special Offers
                </Link>
                <Link 
                  to="/cart" 
                  className="flex items-center text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <ShoppingCart className="w-5 h-5 mr-1" />
                  Cart
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
      />
      
      <WishlistModal
        isOpen={isWishlistModalOpen}
        onClose={() => setIsWishlistModalOpen(false)}
      />
    </>
  );
};
