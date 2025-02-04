import React, { createContext, useState } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const login = async (name, email) => {
    try {
      const response = await axios.post(
        "https://frontend-take-home-service.fetch.com/auth/login",
        { name, email },
        { withCredentials: true }
      );
      if (response.status === 200) {
        setIsAuthenticated(true);
        return true;
      }
    } catch (error) {
      console.error("Login failed", error);
      setIsAuthenticated(false);
      return false;
    }
  };

  const logout = async () => {
    try {
      await axios.post("https://frontend-take-home-service.fetch.com/auth/logout", {}, { withCredentials: true });
      setIsAuthenticated(false);
    } catch (error) {
      console.error("Logout failed", error);
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
