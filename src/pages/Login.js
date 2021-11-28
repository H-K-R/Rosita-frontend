import React, { useEffect } from "react";
import { useHistory, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle, user } = useAuth();
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    if (user && location.state?.from?.pathname) {
      history.push(location.state?.from?.pathname);
    } else if (user) {
      history.push("/");
    }
  });

  return (
    <div className="py-5 d-flex justify-content-center align-items-center my-5">
      <button className="btn btn-primary" onClick={signInWithGoogle}>
        <i className="fab fa-google"></i> Sign in with Google
      </button>
    </div>
  );
};

export default Login;
