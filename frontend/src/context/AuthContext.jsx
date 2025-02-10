import { createContext, useState } from "react";

// create context

export const AuhtContext = createContext();

// create Provider

export const AuhtContextProvider = ({ children }) => {
  const [isLogin, setIsLogin] = useState(false);
  const [token, setToken] = useState(null);
  return (
    <AuhtContext.Provider value={{ isLogin, setIsLogin, token, setToken }}>
      {children}
    </AuhtContext.Provider>
  );
};
