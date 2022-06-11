import React, { useState } from "react";

import { auth, signInWithGoogle } from "../../firebase/utils";
import { withRouter } from "../../hoc/withRouter";
import AuthWrapper from "../AuthWrapper";
import { useNavigate } from "react-router-dom";



const SingIn = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      auth.signInWithEmailAndPassword(email, password);
      resetForm();
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  const configAuthWrapper = {
    headline: "Sign In ..",
  };

  return (
    <>
      <AuthWrapper {...configAuthWrapper}>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <input
              name="email"
              type="email"
              value={email}
              className="form-control input-lg"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              name="password"
              type="password"
              value={password}
              className="form-control input-lg"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign in
          </button>
          <button
            onClick={signInWithGoogle}
            className="btn btn-lg btn-primary btn-block"
            type="button"
          >
            Sign in with Google
          </button>
        </form>

     
      </AuthWrapper>
    </>
  );
};

export default withRouter(SingIn);
