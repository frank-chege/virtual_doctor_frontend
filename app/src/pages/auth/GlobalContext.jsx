//create a global state to manage login status
import React, { createContext, useState, useContext, Children } from "react";

const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
  //manage login state
  const [authStatus, setAuthStatus] = useState(false);

  return (
    <GlobalContext.Provider value={{ authStatus, setAuthStatus }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export default GlobalContextProvider;
