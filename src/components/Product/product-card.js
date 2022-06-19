import React from "react";
import Button from "../forms/Button";
import { useDispatch } from "react-redux";
import { addProduct } from "./../../redux/Cart/cart.actions";

const ProductCard = (product) => {
  const dispatch = useDispatch();
  const { documentID, productThumbnail, productName, productPrice } = product;
  if (
    !documentID ||
    !productThumbnail ||
    !productName ||
    typeof productPrice === "undefined"
  )
    return null;

  const configAddToCartBtn = {
    type: "button",
    className: "btn btn-secondary",
  };

  const handleAddToCart = (product) => {
    if (!product) return;
    dispatch(addProduct(product));
  };

  return (
    <div className="col-lg-4 col-sm-6 col-12">
      <div className="card">
        <img
          width={253.4}
          height={168.933}
          className="card-img-top"
          src={productThumbnail}
          alt={productName}
        />
        <div className="card-body">
          <h4 className="card-title">{productName}</h4>
          <h6 className="card-text"> ${productPrice}</h6>
        </div>
        <div className="card-footer">
          <div className="row no-gutters">
            <div className="col-3">
              <Button
                {...configAddToCartBtn}
                onClick={() => handleAddToCart(product)}
              >
                +
              </Button>

              {/* <button className="btn btn-secondary" type="button">
                +
              </button> */}
            </div>
            <div className="col-6 text-center items-count">1 in cart</div>
            <div className="col-3">
              <button className="btn btn-secondary" type="button">
                -
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
