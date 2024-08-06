import React, { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('accessToken'); // Or use cookies
    if (token) {
      try {
        const decoded = jwtDecode(token); // Use decode function
        
        setUser(decoded);
      } catch (err) {
        console.error('Token decoding failed:', err);
      }
    }
  }, []);

  

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

