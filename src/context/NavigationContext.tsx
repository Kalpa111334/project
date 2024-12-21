import React, { createContext, useContext, useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface NavigationContextType {
  currentPath: string;
  previousPath: string;
  isNavigating: boolean;
  updateNavigation: (path: string) => void;
  breadcrumbs: { label: string; path: string }[];
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

const pathToLabel: Record<string, string> = {
  '': 'Home',
  'products': 'Products',
  'cart': 'Shopping Cart',
  'checkout': 'Checkout',
  'profile': 'Profile',
  'orders': 'Orders',
  'wishlist': 'Wishlist',
  'login': 'Login',
  'register': 'Register',
};

export const NavigationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const [currentPath, setCurrentPath] = useState(location.pathname);
  const [previousPath, setPreviousPath] = useState('');
  const [isNavigating, setIsNavigating] = useState(false);
  const [breadcrumbs, setBreadcrumbs] = useState<{ label: string; path: string }[]>([]);

  const generateBreadcrumbs = (path: string) => {
    const paths = path.split('/').filter(Boolean);
    const breadcrumbItems = paths.map((item, index) => {
      const path = `/${paths.slice(0, index + 1).join('/')}`;
      const label = pathToLabel[item] || item;
      return { label, path };
    });

    return [{ label: 'Home', path: '/' }, ...breadcrumbItems];
  };

  const updateNavigation = (path: string) => {
    setPreviousPath(currentPath);
    setCurrentPath(path);
    setIsNavigating(true);
    setBreadcrumbs(generateBreadcrumbs(path));

    // Reset navigation state after animation
    setTimeout(() => {
      setIsNavigating(false);
    }, 300);
  };

  useEffect(() => {
    updateNavigation(location.pathname);
  }, [location.pathname]);

  return (
    <NavigationContext.Provider
      value={{
        currentPath,
        previousPath,
        isNavigating,
        updateNavigation,
        breadcrumbs,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
