import React from "react";
import logo from "../../assets/reactjs.svg";

const Registration = () => {
  return (
    <>
      <main role="main" className="container">
        <div className="text-center">
          <div className="login-wrap">
            <img className="mb-4" src={logo} alt="" width={72} height={72} />
            <h1 className="h3 mb-3 font-weight-normal">
              <span>Signing in...</span>
            </h1>
            <button className="btn btn-lg btn-primary btn-block" type="button">
              Sign in with Google
            </button>
            <p className="mt-5 mb-3 text-muted">© 2017-2022</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default Registration;
