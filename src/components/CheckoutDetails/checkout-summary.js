import React from "react";

const CheckoutSummary = (product) => {
  const { productName, productThumbnail, productPrice, quantity, documentID } =
    product;
  return (
    <>
      <li class="list-group-item">
        {quantity} x {productName}
        <div class="float-right">${productPrice}</div>
      </li>
    </>
  );
};

export default CheckoutSummary;
