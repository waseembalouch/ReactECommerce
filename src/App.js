import React, { useEffect } from "react";
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
import Dashboard from "./pages/Dashboard";
import WithAuth from "./hoc/withAuth";

const App = (props) => {
  const { setCurrenUser, currentUser } = props;
  useEffect(() => {
    // const authListener = auth.onAuthStateChanged((userAuth) => {
    //   if (userAuth) {
    //     const userRef = await handleUserProfile(userAuth);
    //     userRef.onSnapshot((snapshot) => {
    //       this.props.setCurrenUser({
    //         id: snapshot.id,
    //         ...snapshot.data(),
    //       });
    //     });
    //   }
    //   this.props.setCurrenUser(userAuth);
    // });
    // return () => {
    //   authListener();
    // };
  }, []);

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

          <Route
            path="/dashboard"
            element={
              <>
                <WithAuth>
                  <MainLayout>
                    <Dashboard />
                  </MainLayout>
                </WithAuth>
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
};

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrenUser),
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
