import React, { createContext } from "react";
import useFirebase from "../hooks/useFirebase";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const firebase = useFirebase();

  return (
    <AuthContext.Provider value={firebase}>{children}</AuthContext.Provider>
  );
};

export default AuthContextProvider;
