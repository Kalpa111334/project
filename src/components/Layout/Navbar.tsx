import React from 'react';
import { ShoppingCart, Home, Fish, Info, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#1B4965] text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Fish className="h-8 w-8" />
            <span className="font-bold text-xl">Lellama Online</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="flex items-center space-x-1 hover:text-[#F0F7F4]">
              <Home className="h-5 w-5" />
              <span>Home</span>
            </Link>
            <Link to="/products" className="flex items-center space-x-1 hover:text-[#F0F7F4]">
              <Fish className="h-5 w-5" />
              <span>Products</span>
            </Link>
            <Link to="/about" className="flex items-center space-x-1 hover:text-[#F0F7F4]">
              <Info className="h-5 w-5" />
              <span>About</span>
            </Link>
            <Link to="/contact" className="flex items-center space-x-1 hover:text-[#F0F7F4]">
              <Phone className="h-5 w-5" />
              <span>Contact</span>
            </Link>
          </div>

          <Link to="/cart" className="flex items-center space-x-1 hover:text-[#F0F7F4]">
            <ShoppingCart className="h-6 w-6" />
            <span className="sr-only">Cart</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}