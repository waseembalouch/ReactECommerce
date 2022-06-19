import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { checkUserSession } from "./redux/User/user.actions";

// hoc
import WithAuth from "./hoc/withAuth";
import WithAdminAuth from "./hoc/withAdminAuth";

// layouts
import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";

// pages
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";
import Signup from "./pages/Registration";
import Dashboard from "./pages/Dashboard";
// import Admin from "./pages/Admin/Index";

import "./App.css";

import AddProductPage from "./pages/Admin/AddProductPage";
import ManageProductPage from "./pages/Admin/ManageProductPage";
import Cart from "./pages/Cart";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
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

          <Route
            path="/addproduct"
            element={
              <>
                <MainLayout>
                  <AddProductPage />
                </MainLayout>
              </>
            }
          />
          <Route
            path="/manageproduct"
            element={
              <>
                <MainLayout>
                  <ManageProductPage />
                </MainLayout>
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <MainLayout>
                  <Cart/>
                </MainLayout>
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
};

export default App;
