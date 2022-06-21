import React, { useState, useEffect } from "react";
import FormInput from "./../forms/FormInput";
import Button from "./../forms/Button";
import { saveOrderHistory } from "./../../redux/Orders/orders.actions";
import { clearCart } from './../../redux/Cart/cart.actions';
import { createStructuredSelector } from 'reselect';
import { useSelector, useDispatch } from 'react-redux';


import {
  selectCartTotal,
  selectCartItemsCount,
  selectCartItems,
} from "./../../redux/Cart/cart.selectors";


const initialAddressState = {
  name: "",
  address: "",
  city: "",
  phone: "",
};

const mapState = createStructuredSelector({
  total: selectCartTotal,
  itemCount: selectCartItemsCount,
  cartItems: selectCartItems,
});

const CheckoutDetails = () => {
  return (
    <div className="row">
      <div className="col-md-6">
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" className="form-control" />
            <div className="alert alert-danger">
              <div>Address is required.</div>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="city">City</label>
            <input type="text" id="city" className="form-control" />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" className="form-control" />
          </div>
          <div>
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <a className="btn btn-default">Cancel</a>
          </div>
        </form>
      </div>
      <div className="col-md-6">
        <div className="card">
          <div className="card-body">
            <h4 className="card-title">Order summary</h4>
            <p className="card-text">you have 1 items in your shopping cart.</p>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                1 x Milk
                <div className="float-right">$1.00</div>
              </li>
              <li className="list-group-item font-weight-bold">
                Total
                <div className="float-right">$1.00</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutDetails;
