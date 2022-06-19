import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectCartItems,
  selectCartTotal,
  selectCartItemsCount,
} from "./../../redux/Cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import Button from "./../forms/Button";
import PageWrapper from "../Wrapper/page-wrapper";
import Item from "./Item";

const mapState = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
  totalItems: selectCartItemsCount,
});

const Checkout = () => {
  const navigate = useNavigate();
  const { cartItems, total, totalItems } = useSelector(mapState);
  const errMsg = "You have no items in your cart.";
  return (
    <PageWrapper>
      <h1 className="mb-3">
        Shopping Cart
        <small className="float-right">
          You have {totalItems} item(s) in your cart
        </small>
      </h1>
      {cartItems.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th width={80} />
              <th>Product</th>
              <th className="text-center" width={230}>
                Quantity
              </th>
              <th className="text-right" width={200}>
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item, pos) => {
              return (
                <tr key={pos}>
                  <Item {...item} />
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <th />
              <th />
              <th />
              <th className="text-right">${total}</th>
            </tr>
          </tfoot>
        </table>
      ) : (
        <p>{errMsg}</p>
      )}
      <p>
        <button className="btn btn-info mr-2" onCLick={() => navigate("/payment")}>Checkout Cart</button>
        <button className="btn btn-danger">Clear shopping cart</button>
      </p>
    </PageWrapper>
  );
};

export default Checkout;