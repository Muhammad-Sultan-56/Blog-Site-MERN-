import { createContext, useState } from "react";

// create context

export const AuthContext = createContext();

// create Provider

export const AuhtContextProvider = ({ children }) => {
  const logout = () => {
    setIsLogin(false);
    setToken(null);
  };
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(null);
  return (
    <AuthContext.Provider
      value={{ isLogin, setIsLogin, token, setToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
