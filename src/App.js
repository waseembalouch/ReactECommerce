import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import HomepageLayout from "./layouts/HomepageLayout";
import MainLayout from "./layouts/MainLayout";
import Homepage from "./pages/Homepage";
import Login from "./pages/Login";

function App() {
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
              <>
                <MainLayout>
                  <Login />
                </MainLayout>
              </>
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
