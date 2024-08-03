// AuthContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';
import * as jwtDecode from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken'); // Or use cookies
    if (token) {
      const decoded = jwtDecode.default(token); // Use jwtDecode.default to access the function
      setUser(decoded);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
