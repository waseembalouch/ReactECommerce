import React from "react";

const CheckoutSummary = (product) => {
  const { productName, productPrice, quantity} =
    product;
  return (
    <>
      {quantity} x {productName}
      <div className="float-right">${productPrice}</div>
    </>
  );
};

export default CheckoutSummary;
