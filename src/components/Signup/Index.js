import React, { Component } from "react";
import logo from "../../assets/reactjs.svg";
import { auth, handleUserProfile } from "../../firebase/utils";

const initialState = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
  errors: [],
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
  handleFormSubmit = async (eve) => {
    eve.preventDefault();
    const { displayName, email, password, confirmPassword, errors } =
      this.state;
    if (password !== confirmPassword) {
      const err = ["Password Don't  match"];
      this.setState({
        errors: err,
      });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
      this.setState({
        ...initialState,
      });
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    const { displayName, email, password, confirmPassword, errors } =
      this.state;

    return (
      <>
        <main role="main" className="container">
          <div className="text-center">
            <div className="login-wrap">
              <img className="mb-4" src={logo} alt="" width={72} height={72} />
              <h1 className="h3 mb-3 font-weight-normal">
                <span>Signing Up...</span>
              </h1>
              {errors.length > 0 && (
                <ul>
                  {errors.map((err, index) => {
                    return <li key={index}>{err}</li>;
                  })}
                </ul>
              )}
              <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                  <input
                    type="text"
                    name="displayName"
                    value={displayName}
                    className="form-control input-lg"
                    placeholder="Full Name"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={email}
                    className="form-control input-lg"
                    placeholder="Enter email"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="password"
                    value={password}
                    className="form-control input-lg"
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                </div>
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    className="form-control input-lg"
                    placeholder="Confirm Password"
                    onChange={this.handleChange}
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
