import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  emailSignInStart,
  googleSignInStart,
} from "../../redux/User/user.actions";

import AuthWrapper from "../Wrapper/auth-wrapper";

const mapState = ({ user }) => ({
  currentUser: user.currentUser,
});

const SingIn = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { currentUser } = useSelector(mapState);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (currentUser) {
      resetForm();
      navigate("/");
    }
  }, [currentUser]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(emailSignInStart({ email, password }));
  };
  const handleGoogleSignIn = (e) => {
    dispatch(googleSignInStart());
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
            onClick={handleGoogleSignIn}
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

export default SingIn;
