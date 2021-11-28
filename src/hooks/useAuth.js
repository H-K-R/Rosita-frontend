import { useContext } from "react";
import { AuthContext } from "../context/AuthContextProvider";

const useAuth = () => {
  return useContext(AuthContext);
};

export default useAuth;
