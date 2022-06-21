import React from "react";
import { useDispatch } from "react-redux";
import {
  addProduct,
  reduceCartItem,
} from "../../redux/Cart/cart.actions";

const Item = (product) => {
  const dispatch = useDispatch();
  const { productName, productThumbnail, productPrice, quantity } =
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
        <td className="cart-actions">
          <div className="row no-gutters">
            <div className="col-3">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => handleAddProduct(product)}
              >
                +
              </button>
            </div>
            <div className="col-6 text-center items-count"> {quantity} in cart</div>
            <div className="col-3">
              <button
                className="btn btn-secondary"
                type="button"
                onClick={() => handleReduceItem(product)}
              >
                -
              </button>
            </div>
          </div>
        </td>
        <td className="text-right">${productPrice}</td>

    </>
  );
};

export default Item;
