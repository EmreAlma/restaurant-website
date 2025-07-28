"use client";
import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) setUser(JSON.parse(storedUser));
  }, []);

  const login = (userData) => {
    localStorage.setItem("user", JSON.stringify(userData));
    setUser(userData);

     // lightweight cookies (middleware)
    const maxAge = 60 * 60 * 24 * 7; // 7 gün
    document.cookie = `auth=1; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
    document.cookie = `role=${userData.role ?? ""}; Path=/; Max-Age=${maxAge}; SameSite=Lax`;
  };

  const logout = () => {
    localStorage.removeItem("user");
    setUser(null);

    // cookies kill
    document.cookie = "auth=; Path=/; Max-Age=0; SameSite=Lax";
    document.cookie = "role=; Path=/; Max-Age=0; SameSite=Lax";
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);