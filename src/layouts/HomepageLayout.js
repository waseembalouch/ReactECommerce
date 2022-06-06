import React from "react";
import Header from "../components/Header";

const HomepageLayout = (props) => {
  return (
    <>
      <Header />
      <div>{props.children}</div>
    </>
  );
};

export default HomepageLayout;
