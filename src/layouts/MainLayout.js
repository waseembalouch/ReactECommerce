import React from "react";
import Header from "../components/Header";

const MainLayout = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
    </>
  );
};

export default MainLayout;
