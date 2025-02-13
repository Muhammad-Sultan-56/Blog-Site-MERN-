import { createContext, useEffect, useState } from "react";

// create context

export const AuthContext = createContext();

// create Provider
export const AuhtContextProvider = ({ children }) => {
  // logout function
  const logout = () => {
    setIsLogin(false);
    setToken(null);
  };
  const savedToken = localStorage.getItem("token");
  const savedIsLogin = savedToken ? true : false;

  const [isLogin, setIsLogin] = useState(savedIsLogin);
  const [token, setToken] = useState(savedToken);

  useEffect(() => {
    if (isLogin && token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token, isLogin]);

  return (
    <AuthContext.Provider
      value={{ isLogin, setIsLogin, token, setToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
