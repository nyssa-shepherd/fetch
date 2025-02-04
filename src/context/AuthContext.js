import React, { createContext, useState } from 'react';
import { loginUser } from '../api/fetchDogs';


export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (name, email) => {
      const loginSuccess = loginUser(name, email);
      setIsAuthenticated(loginSuccess);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login }}>
      {children}
    </AuthContext.Provider>
  );
};
