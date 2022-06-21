import React from "react";
import { useDispatch } from "react-redux";
import {
  removeCartItem,
  addProduct,
  reduceCartItem,
} from "../../redux/Cart/cart.actions";

const Item = (product) => {
  const dispatch = useDispatch();
  const { productName, productThumbnail, productPrice, quantity, documentID } =
    product;



  const handleAddProduct = (product) => {
    dispatch(addProduct(product));
  };

  const handleReduceItem = (product) => {
    dispatch(reduceCartItem(product));
  };

  return (
    <>

        <td>
          <div
            className="thumbnail"
            style={{ backgroundImage: `url(${productThumbnail})` }}
          ></div>
        </td>
        <td> {productName}</td>
        <td class="cart-actions">
          <div class="row no-gutters">
            <div class="col-3">
              <button
                class="btn btn-secondary"
                type="button"
                onClick={() => handleAddProduct(product)}
              >
                +
              </button>
            </div>
            <div class="col-6 text-center items-count"> {quantity} in cart</div>
            <div class="col-3">
              <button
                class="btn btn-secondary"
                type="button"
                onClick={() => handleReduceItem(product)}
              >
                -
              </button>
            </div>
          </div>
        </td>
        <td class="text-right">${productPrice}</td>

    </>
  );
};

export default Item;
