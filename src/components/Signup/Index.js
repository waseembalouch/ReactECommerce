import React, { Component } from "react";
import logo from "../../assets/reactjs.svg";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  }
  handleP

  render() {
    const { displayName, email, password, confirmPassword } = this.state;

    return (
      <>
        <main role="main" className="container">
          <div className="text-center">
            <div className="login-wrap">
              <img className="mb-4" src={logo} alt="" width={72} height={72} />
              <h1 className="h3 mb-3 font-weight-normal">
                <span>Signing Up...</span>
              </h1>
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="displayName"
                    value={displayName}
                    className="form-control input-lg"
                    placeholder="Full Name"
                    handleChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="name"
                    value={email}
                    className="form-control input-lg"
                    placeholder="Enter email"
                    handleChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    className="form-control input-lg"
                    placeholder="Password"
                    handleChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    className="form-control input-lg"
                    placeholder="Confirm Password"
                    handleChange={this.handleChange}
                  />
                </div>
                <button
                  className="btn btn-lg btn-primary btn-block"
                  type="submit"
                >
                  Sign Up
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

export default Signup;
