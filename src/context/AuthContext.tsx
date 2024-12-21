import React, { createContext, useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  token: string | null;
  isAuthenticated: boolean;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
  updateProfile: (updates: Partial<User>) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_KEY = 'auth_state';
const TOKEN_EXPIRY = 7 * 24 * 60 * 60 * 1000; // 7 days

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  const [authState, setAuthState] = useState<AuthState>(() => {
    const savedState = localStorage.getItem(STORAGE_KEY);
    if (savedState) {
      const parsed = JSON.parse(savedState);
      const expiryTime = new Date(parsed.expiryTime).getTime();
      if (expiryTime > Date.now()) {
        return {
          user: parsed.user,
          token: parsed.token,
          isAuthenticated: true
        };
      }
    }
    return { user: null, token: null, isAuthenticated: false };
  });

  useEffect(() => {
    // Check token expiry periodically
    const checkInterval = setInterval(() => {
      const savedState = localStorage.getItem(STORAGE_KEY);
      if (savedState) {
        const parsed = JSON.parse(savedState);
        const expiryTime = new Date(parsed.expiryTime).getTime();
        if (expiryTime <= Date.now()) {
          logout();
        }
      }
    }, 60000); // Check every minute

    return () => clearInterval(checkInterval);
  }, []);

  const saveAuthState = (state: AuthState) => {
    const expiryTime = new Date(Date.now() + TOKEN_EXPIRY);
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ...state,
      expiryTime: expiryTime.toISOString()
    }));
    setAuthState(state);
  };

  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      setError(null);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (email === 'demo@example.com' && password === 'password') {
        const newAuthState: AuthState = {
          user: {
            id: '1',
            name: 'Demo User',
            email: 'demo@example.com',
            avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=demo'
          },
          token: 'mock_jwt_token',
          isAuthenticated: true
        };
        saveAuthState(newAuthState);
        navigate('/');
      } else {
        throw new Error('Invalid email or password');
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Login failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const register = async (email: string, password: string, name: string) => {
    try {
      setIsLoading(true);
      setError(null);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      const newAuthState: AuthState = {
        user: {
          id: Date.now().toString(),
          name,
          email,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`
        },
        token: 'mock_jwt_token',
        isAuthenticated: true
      };
      saveAuthState(newAuthState);
      navigate('/');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Registration failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (updates: Partial<User>) => {
    try {
      setIsLoading(true);
      setError(null);

      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));

      if (authState.user) {
        const updatedUser = { ...authState.user, ...updates };
        saveAuthState({
          ...authState,
          user: updatedUser
        });
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Profile update failed');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_KEY);
    setAuthState({ user: null, token: null, isAuthenticated: false });
    navigate('/login');
  };

  useEffect(() => {
    // Initial loading state
    setIsLoading(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        logout,
        register,
        updateProfile,
        isLoading,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export default AuthContext;
