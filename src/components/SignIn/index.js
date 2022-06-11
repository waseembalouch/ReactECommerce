import React, { Component } from "react";
import logo from "../../assets/reactjs.svg";
import { auth, signInWithGoogle } from "../../firebase/utils";

const initialState = {
  email: "",
  password: "",
};

class SingIn extends Component {
  constructor(props) {
    super(props);
    this.state = { ...initialState };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    const { email, password } = this.state;
    try {
      auth.signInWithEmailAndPassword(email, password);
      this.setState({
        ...initialState,
      });
    } catch (error) {}
  };

  render() {
    const { email, password } = this.state;
    return (
      <>
        <main role="main" className="container">
          <div className="text-center">
            <div className="login-wrap">
              <img className="mb-4" src={logo} alt="" width={72} height={72} />
              <h1 className="h3 mb-3 font-weight-normal">
                <span>Signing in...</span>
              </h1>
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    value={email}
                    className="form-control input-lg"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    name="password"
                    type="password"
                    value={password}
                    className="form-control input-lg"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>

                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                >
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
            </div>

            <p className="mt-5 mb-3 text-muted">© 2017-2022</p>
          </div>
        </main>
      </>
    );
  }
}

export default SingIn;
