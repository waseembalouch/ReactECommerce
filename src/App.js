import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./pages/Homepage";

function App() {
  return (
    <>
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
