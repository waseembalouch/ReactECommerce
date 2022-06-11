import React, { useState, useEffect } from "react";
import { withRouter } from "../../hoc/withRouter";
import AuthWrapper from "../AuthWrapper";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  resetAllAuthForms,
  signInUser,
  signInWithGoogle,
} from "../../redux/User/user.actions";


const mapState = ({ user }) => ({
  signInSuccess: user.signInSuccess,
});

const SingIn = (props) => {
  const { signInSuccess } = useSelector(mapState);
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (signInSuccess) {
      resetForm();
      dispatch(resetAllAuthForms());
      navigate("/");
    }
  }, [signInSuccess]);

  const resetForm = () => {
    setEmail("");
    setPassword("");
  };

  const handleGoogleSignIn = (e) => {
    dispatch(signInWithGoogle());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signInUser({ email, password }));
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

export default withRouter(SingIn);
