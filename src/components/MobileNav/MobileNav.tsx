import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Home, ShoppingCart, Heart, User, Package, Tag, Phone } from 'lucide-react';
import './MobileNav.css';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/', icon: <Home />, label: 'Home' },
    { path: '/products', icon: <Package />, label: 'Products' },
    { path: '/categories', icon: <Tag />, label: 'Categories' },
    { path: '/cart', icon: <ShoppingCart />, label: 'Cart' },
    { path: '/wishlist', icon: <Heart />, label: 'Wishlist' },
    { path: '/profile', icon: <User />, label: 'Profile' },
    { path: '/contact', icon: <Phone />, label: 'Contact' },
  ];

  return (
    <>
      <button
        className="mobile-menu-button"
        onClick={() => setIsOpen(true)}
        aria-label="Open menu"
      >
        <Menu className="w-6 h-6" />
      </button>

      <div className={`mobile-nav-overlay ${isOpen ? 'active' : ''}`}>
        <div className={`mobile-nav-content ${isOpen ? 'active' : ''}`}>
          <div className="mobile-nav-header">
            <h2 className="mobile-nav-title">Menu</h2>
            <button
              className="mobile-nav-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="mobile-nav-menu">
            {navigationItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`mobile-nav-item ${
                  location.pathname === item.path ? 'active' : ''
                }`}
                onClick={() => setIsOpen(false)}
              >
                <span className="mobile-nav-icon">{item.icon}</span>
                <span className="mobile-nav-label">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="mobile-nav-footer">
            <div className="mobile-nav-info">
              <p className="text-sm text-gray-600">Need help?</p>
              <a href="tel:+1234567890" className="text-purple-600 font-medium">
                Call us: (123) 456-7890
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
