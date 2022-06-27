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
import OrderHistoryPage from "./pages/Order/OrderHistoryPage";
import OrderDetailPage from "./pages/Order/OrderDetailPage";

import "./App.css";

import AddProductPage from "./pages/Product/AddProductPage";
import EditProductPage from "./pages/Product/EditProductPage";
import ManageProductPage from "./pages/Product/ManageProductPage";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Loader from "./components/Loader";

// toaster container
import { ToastContainer } from "react-toastify";
//toaster css
import "react-toastify/dist/ReactToastify.css";

const App = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  }, [dispatch]);

  return (
    <>
      <Loader />
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
            path="/orders"
            element={
              <>
                <WithAuth>
                  <MainLayout>
                    <OrderHistoryPage />
                  </MainLayout>
                </WithAuth>
              </>
            }
          />
          <Route
            path="/orderDetail/:orderID"
            element={
              <>
                <WithAuth>
                  <MainLayout>
                    <OrderDetailPage />
                  </MainLayout>
                </WithAuth>
              </>
            }
          />
          <Route
            path="/addproduct"
            element={
              <>
                <WithAdminAuth>
                  <MainLayout>
                    <AddProductPage />
                  </MainLayout>
                </WithAdminAuth>
              </>
            }
          />

          <Route
            path="/editproduct/:documentID"
            element={
              <>
                <WithAdminAuth>
                  <MainLayout>
                    <EditProductPage />
                  </MainLayout>
                </WithAdminAuth>
              </>
            }
          />
          <Route
            path="/manageproduct"
            element={
              <>
                <WithAdminAuth>
                  <MainLayout>
                    <ManageProductPage />
                  </MainLayout>
                </WithAdminAuth>
              </>
            }
          />
          <Route
            path="/cart"
            element={
              <>
                <MainLayout>
                  <Cart />
                </MainLayout>
              </>
            }
          />
          <Route
            path="/checkout"
            element={
              <>
                <WithAuth>
                  <MainLayout>
                    <Checkout />
                  </MainLayout>
                </WithAuth>
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
      <ToastContainer autoClose={1500} />
    </>
  );
};

export default App;
