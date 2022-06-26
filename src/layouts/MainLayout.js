import React from "react";
import Header from "../components/Header";

const MainLayout = (props) => {
  return (
    <>

      <Header {...props} />
      <div>{props.children}</div>
    </>
  );
};

export default MainLayout;
