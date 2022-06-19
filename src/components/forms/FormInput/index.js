import React from "react";

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <div className="form-group">
      {label && <label>{label}</label>}
      <input onChange={handleChange} {...otherProps} className="form-control" />
    </div>
  );
};

export default FormInput;
