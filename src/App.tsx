import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes as RoutesComponent, Route, Navigate } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { Navbar } from './components/Navbar';
import { PrivateRoute } from './components/PrivateRoute';
import { NavigationProvider } from './context/NavigationContext';
import Navigation from './components/Navigation/Navigation';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const Products = React.lazy(() => import('./pages/Products'));
const Cart = React.lazy(() => import('./pages/Cart'));
const Profile = React.lazy(() => import('./pages/Profile'));
const Orders = React.lazy(() => import('./pages/Orders'));
const Categories = React.lazy(() => import('./pages/Categories'));
const SpecialOffers = React.lazy(() => import('./pages/SpecialOffers'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));

// Loading component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
  </div>
);

function App() {
  return (
    <Router>
      <AuthProvider>
        <WishlistProvider>
          <NavigationProvider>
            <div className="min-h-screen flex flex-col bg-gray-50">
              <Navbar />
              <Navigation />
              <Suspense fallback={<LoadingSpinner />}>
                <main className="flex-grow container mx-auto px-4 py-8">
                  <RoutesComponent>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/products" element={<Products />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/special-offers" element={<SpecialOffers />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />

                    {/* Protected Routes */}
                    <Route
                      path="/cart"
                      element={
                        <PrivateRoute>
                          <Cart />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/profile"
                      element={
                        <PrivateRoute>
                          <Profile />
                        </PrivateRoute>
                      }
                    />
                    <Route
                      path="/orders"
                      element={
                        <PrivateRoute>
                          <Orders />
                        </PrivateRoute>
                      }
                    />

                    {/* Catch all route */}
                    <Route path="*" element={<Navigate to="/" replace />} />
                  </RoutesComponent>
                </main>
              </Suspense>
            </div>
          </NavigationProvider>
        </WishlistProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
