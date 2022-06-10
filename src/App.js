import React, { Component } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { auth, handleUserProfile } from "./firebase/utils";

import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Registration";
const initialState = {
  currentUser: null,
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
    };
  }

  authListener = null;

  componentDidMount() {
    // this.authListener = auth.onAuthStateChanged((userAuth) => {
    //   if (userAuth) {
    //     const userRef = handleUserProfile(userAuth);
    //     userRef.onSnapshot((snapshot) => {
    //       this.setState({
    //         currentUser: {
    //           id: snapshot.id,
    //           ...snapshot.data(),
    //         },
    //       });
    //     });
    //   }
    //   this.setState({
    //     ...initialState,
    //   });
    // });
  }
  componentWillUnmount() {
    //this.authListener();
  }

  render() {
    const { currentUser } = this.state;

    return (
      <>
        <div className="main">
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <HomepageLayout currentUser={currentUser}>
                    <Homepage />
                  </HomepageLayout>
                </>
              }
            />
            <Route
              path="/login"
              element={
                <MainLayout currentUser={currentUser}>
                  <Login />
                </MainLayout>
              }
            />

            <Route
              path="/registration"
              element={
                <>
                  <MainLayout currentUser={currentUser}>
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

export default App;
