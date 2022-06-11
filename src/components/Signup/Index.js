import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { resetAllAuthForms, signUpUser } from "../../redux/User/user.actions";
import { withRouter } from "../../hoc/withRouter";
import AuthWrapper from "../AuthWrapper";
import { useNavigate } from "react-router-dom";

const mapState = ({ user }) => ({
  signUpSuccess: user.signUpSuccess,
  signUpError: user.signUpError,
});

const Signup = (props) => {
  const { signUpSuccess, signUpError } = useSelector(mapState);

  const dispatch = useDispatch();

  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (signUpSuccess) {
      resetForm();
      dispatch(resetAllAuthForms());
      navigate("/");
    }
  }, [signUpSuccess]);

  useEffect(() => {
    if (Array.isArray(signUpError) && signUpError.length > 0) {
      setErrors(signUpError);
    }
  }, [signUpError]);

  const resetForm = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = async (eve) => {
    eve.preventDefault();
    dispatch(signUpUser({ displayName, email, password, confirmPassword }));
  };

  const configAuthWrapper = {
    headline: "Sign Up ...",
  };

  return (
    <>
      <AuthWrapper {...configAuthWrapper}>
        {errors.length > 0 && (
          <ul>
            {errors.map((err, index) => {
              return <li key={index}>{err}</li>;
            })}
          </ul>
        )}
        <form onSubmit={handleFormSubmit}>
          <div className="form-group">
            <input
              type="text"
              name="displayName"
              value={displayName}
              className="form-control input-lg"
              placeholder="Full Name"
              onChange={(e) => setDisplayName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              value={email}
              className="form-control input-lg"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="password"
              value={password}
              className="form-control input-lg"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              name="confirmPassword"
              value={confirmPassword}
              className="form-control input-lg"
              placeholder="Confirm Password"
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>
          <button className="btn btn-lg btn-primary btn-block" type="submit">
            Sign Up
          </button>
        </form>
      </AuthWrapper>
    </>
  );
};

export default withRouter(Signup);
