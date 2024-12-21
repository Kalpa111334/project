import React from 'react';
import { Facebook, Twitter, Instagram, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#1B4965] text-white pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-[#F0F7F4]">Home</a></li>
              <li><a href="/products" className="hover:text-[#F0F7F4]">Products</a></li>
              <li><a href="/about" className="hover:text-[#F0F7F4]">About Us</a></li>
              <li><a href="/contact" className="hover:text-[#F0F7F4]">Contact</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>123 Ocean Drive</li>
              <li>Seafood City, SC 12345</li>
              <li>Phone: (555) 123-4567</li>
              <li>Email: info@lellama.com</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 focus:outline-none focus:ring-2 focus:ring-[#F0F7F4]"
                required
              />
              <button
                type="submit"
                className="w-full px-4 py-2 bg-[#F0F7F4] text-[#1B4965] rounded hover:bg-white transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#F0F7F4]"><Facebook /></a>
              <a href="#" className="hover:text-[#F0F7F4]"><Twitter /></a>
              <a href="#" className="hover:text-[#F0F7F4]"><Instagram /></a>
              <a href="#" className="hover:text-[#F0F7F4]"><Mail /></a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p>&copy; {new Date().getFullYear()} Lellama Online. All rights reserved.</p>
          <p className="mt-2">
            <a href="/privacy" className="hover:text-[#F0F7F4]">Privacy Policy</a>
            {' • '}
            <a href="/terms" className="hover:text-[#F0F7F4]">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
}