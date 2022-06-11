import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrenUser } from "./redux/User/user.actions";

import "./App.css";
import { auth, handleUserProfile } from "./firebase/utils";

import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Registration";


class App extends Component {
  authListener = null;

  componentDidMount() {
    this.authListener = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        const userRef = await handleUserProfile(userAuth);
        userRef.onSnapshot((snapshot) => {
          this.props.setCurrenUser({
            id: snapshot.id,
            ...snapshot.data(),
          });
        });
      }
      this.props.setCurrenUser(userAuth);
    });
  }
  componentWillUnmount() {
    //this.authListener();
  }

  render() {
    const { currentUser } = this.props;

    return (
      <>
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomepageLayout>
                    <Homepage />
                  </HomepageLayout>
                </>
              }
            />
            <Route
              path="/login"
              element={
                <MainLayout>
                  <Login />
                </MainLayout>
              }
            />

            <Route
              path="/registration"
              element={
                <>
                  <MainLayout>
                    <Signup />
                  </MainLayout>
                </>
              }
            />
          </Routes>
        </div>
      </>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrenUser),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
