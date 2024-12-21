import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="relative h-[80vh] bg-cover bg-center" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?auto=format&fit=crop&q=80&w=2400)'
    }}>
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div className="text-white max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Premium Seafood, <br />
            Ocean Fresh
          </h1>
          <p className="text-xl mb-8 text-gray-200">
            Experience the finest selection of fresh seafood, delivered directly from the ocean 
            to your doorstep. Savor restaurant-quality seafood in the comfort of your home.
          </p>
          <div className="flex gap-4">
            <Link
              to="/products"
              className="inline-flex items-center px-6 py-3 bg-[#F0F7F4] text-[#1B4965] rounded-lg font-semibold hover:bg-white transition-colors"
            >
              Shop Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}