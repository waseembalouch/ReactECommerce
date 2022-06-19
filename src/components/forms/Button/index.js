import React from "react";

const Button = ({ children, ...otherProps }) => {
  return (
    <button  {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
