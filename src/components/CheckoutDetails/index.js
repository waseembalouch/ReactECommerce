import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import {
  selectCartTotal,
  selectCartItemsCount,
  selectCartItems,
} from "./../../redux/Cart/cart.selectors";

import { createStructuredSelector } from "reselect";

import FormInput from "./../forms/FormInput";
import Button from "./../forms/Button";

import { saveOrderHistory } from "./../../redux/Orders/orders.actions";

import PageWrapper from "../Wrapper/page-wrapper";
import CheckoutSummary from "./checkout-summary";

const initialAddressState = {
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
  const { cartItems, total, itemCount } = useSelector(mapState);
  const [shippingAddress, setShippingAddress] = useState({
    ...initialAddressState,
  });
  const [recipientName, setRecipientName] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleShipping = (evt) => {
    const { name, value } = evt.target;
    setShippingAddress({
      ...shippingAddress,
      [name]: value,
    });
  };

  useEffect(() => {
    if (itemCount < 1) {
      navigate("/");
    }
  }, [navigate, itemCount]);

  const handleFormSubmit = async (evt) => {
    evt.preventDefault();

    if (
      !shippingAddress.address ||
      !shippingAddress.city ||
      !shippingAddress.phone ||
      !recipientName
    ) {
      alert("All fields are required");
      return;
    }
    const configOrder = {
      recipientName: recipientName,
      orderTotal: total,
      orderItems: cartItems.map((item) => {
        const {
          documentID,
          productThumbnail,
          productName,
          productPrice,
          quantity,
        } = item;

        return {
          documentID,
          productThumbnail,
          productName,
          productPrice,
          quantity,
        };
      }),
    };

    dispatch(saveOrderHistory(configOrder));
  };

  return (
    <PageWrapper>
      <div className="row">
        <div className="col-md-6">
          <form onSubmit={handleFormSubmit}>
            <FormInput
              required
              label={"Name"}
              name="recipientName"
              handleChange={(evt) => setRecipientName(evt.target.value)}
              value={recipientName}
              type="text"
            />

            <FormInput
              required
              name="address"
              label={"Address"}
              handleChange={(evt) => handleShipping(evt)}
              value={shippingAddress.address}
              type="text"
            />

            <FormInput
              required
              name="city"
              label={"City"}
              handleChange={(evt) => handleShipping(evt)}
              value={shippingAddress.city}
              type="text"
            />

            <FormInput
              required
              name="phone"
              label={"Phone"}
              handleChange={(evt) => handleShipping(evt)}
              value={shippingAddress.phone}
              type="text"
            />

            <div>
              <Button className="btn btn-primary mr-2" type="submit">
                Submit
              </Button>
              <Button className="btn btn-default">
              Cancel
              </Button>

              
            </div>
          </form>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h4 className="card-title">Order summary</h4>
              <p className="card-text">
                you have {itemCount} items in your shopping cart.
              </p>
              <ul className="list-group list-group-flush">
                {cartItems.map((item, pos) => {
                  return (
                    <li key={pos} className="list-group-item">
                      <CheckoutSummary {...item} />
                    </li>
                  );
                })}

                <li className="list-group-item font-weight-bold">
                  Total
                  <div className="float-right">${total}</div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};

export default CheckoutDetails;
