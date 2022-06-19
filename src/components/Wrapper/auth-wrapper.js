import React from "react";
import logo from "../../assets/reactjs.svg";

const AuthWrapper = ({ headline, children }) => {
  return (
    <>
      <main role="main" className="container">
        <div className="text-center">
          <div className="login-wrap">
            <img className="mb-4" src={logo} alt="" width={72} height={72} />
            <h1 className="h3 mb-3 font-weight-normal">
              <span>{headline}</span>
            </h1>
            {children}
          </div>

          <p className="mt-5 mb-3 text-muted">© 2017-2022</p>
        </div>
      </main>
    </>
  );
};

export default AuthWrapper;
