// Add the imports needed in the component
import { createContext, useState, useContext } from 'react';

// Initialise and export the AuthContext
export const AuthContext = createContext();

// This creates a context provider that can be imported and used
export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  const login = () => {
    setUser({ name: 'John Doe' });
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// this actually exporting a custom hook
export const useAuth = () => {
  return useContext(AuthContext);
};
