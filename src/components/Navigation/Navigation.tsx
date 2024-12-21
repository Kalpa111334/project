import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home, ShoppingCart, Heart, User, Package } from 'lucide-react';
import { useNavigation } from '../../context/NavigationContext';
import MobileNav from '../MobileNav/MobileNav';
import './Navigation.css';

const Navigation: React.FC = () => {
  const location = useLocation();
  const { breadcrumbs, isNavigating } = useNavigation();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { path: '/', icon: <Home className="w-5 h-5" />, label: 'Home' },
    { path: '/products', icon: <Package className="w-5 h-5" />, label: 'Products' },
    { path: '/cart', icon: <ShoppingCart className="w-5 h-5" />, label: 'Cart' },
    { path: '/wishlist', icon: <Heart className="w-5 h-5" />, label: 'Wishlist' },
    { path: '/profile', icon: <User className="w-5 h-5" />, label: 'Profile' },
  ];

  return (
    <>
      <nav className={`navigation-container ${isScrolled ? 'scrolled' : ''}`}>
        <div className="nav-content">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <MobileNav />

            {/* Desktop Navigation */}
            <div className="main-nav">
              {navigationItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`nav-item ${
                    location.pathname === item.path ? 'active' : ''
                  } ${isNavigating ? 'navigating' : ''}`}
                >
                  <span className="nav-icon">{item.icon}</span>
                  <span className="nav-label">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Breadcrumbs */}
          <div className="breadcrumbs">
            {breadcrumbs.map((crumb, index) => (
              <React.Fragment key={crumb.path}>
                {index > 0 && <ChevronRight className="breadcrumb-separator" />}
                <Link
                  to={crumb.path}
                  className={`breadcrumb-item ${
                    index === breadcrumbs.length - 1 ? 'active' : ''
                  }`}
                >
                  {crumb.label}
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Progress Indicator */}
        <div className="navigation-progress">
          <div
            className={`progress-bar ${isNavigating ? 'navigating' : ''}`}
            style={{
              width: isNavigating ? '100%' : '0%',
            }}
          />
        </div>
      </nav>

      {/* Bottom Navigation for Mobile */}
      <div className="bottom-nav">
        <div className="bottom-nav-content">
          {navigationItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`bottom-nav-item ${
                location.pathname === item.path ? 'active' : ''
              }`}
            >
              <span className="bottom-nav-icon">{item.icon}</span>
              <span className="bottom-nav-label">{item.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navigation;
