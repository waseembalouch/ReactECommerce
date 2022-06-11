import React, { useState } from "react";
import { auth, handleUserProfile } from "../../firebase/utils";
import { withRouter } from "../../hoc/withRouter";
import AuthWrapper from "../AuthWrapper";
import { useNavigate } from "react-router-dom";
const Signup = (props) => {
  const [displayName, setDisplayName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const resetForm = () => {
    setDisplayName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setErrors([]);
  };

  const handleFormSubmit = async (eve) => {
    eve.preventDefault();

    if (password !== confirmPassword) {
      const err = ["Password Don't  match"];
      setErrors(err);
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
      resetForm();
     
      navigate("/");
    } catch (error) {
      console.log(error);
    }
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
