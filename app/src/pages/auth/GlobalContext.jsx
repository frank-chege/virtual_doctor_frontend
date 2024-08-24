//create a global state to manage login status
import React, { createContext, useState, useContext, useEffect } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  //initialize state with local storage
  const [authStatus, setAuthStatus] = useState(() => {
    const value = localStorage.getItem("authStatus");
    return value ? JSON.parse(value) : false;
  });
  const [role, setRole] = useState(() => {
    return localStorage.getItem("role") || "public";
  });
  //sync state with local storage
  useEffect(() => {
    localStorage.setItem("authStatus", JSON.stringify(authStatus));
    localStorage.setItem("role", role);
  }, [authStatus, role]);

  return (
    <GlobalContext.Provider
      value={{ authStatus, setAuthStatus, role, setRole }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default GlobalContextProvider;
