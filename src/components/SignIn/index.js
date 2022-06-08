import React from "react";
import logo from "../../assets/reactjs.svg";
import { signInWithGoogle } from "../../firebase/utils";

const SingIn = () => {
  return (
    <>
      <main role="main" className="container">
        <div className="text-center">
          <div className="login-wrap">
            <img className="mb-4" src={logo} alt="" width={72} height={72} />
            <h1 className="h3 mb-3 font-weight-normal">
              <span>Signing in...</span>
            </h1>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  class="form-control input-lg"
                  placeholder="Enter email"
                />
              </div>
              <div className="form-group">
                <input
                  type="password"
                  class="form-control input-lg"
                  placeholder="Password"
                />
              </div>

              <button
                className="btn btn-lg btn-primary btn-block"
                type="button"
              >
                Sign in
              </button>
              <button
                className="btn btn-lg btn-primary btn-block"
                type="button"
              >
                Sign in with Google
              </button>
            </form>
          </div>

          <p className="mt-5 mb-3 text-muted">© 2017-2022</p>
        </div>
      </main>
    </>
  );
};

export default SingIn;
