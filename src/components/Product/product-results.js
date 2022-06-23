import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProductsStart } from "./../../redux/Products/products.actions";
import PageWrapper from "../Wrapper/page-wrapper";
import { selectCartItems } from "../../redux/Cart/cart.selectors";
import ProductCard from "./product-card";
import { createStructuredSelector } from "reselect";

const mapCartState = createStructuredSelector({
  cartItems: selectCartItems,
});

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const handleFilter = (e) => {
  const nextFilter = e.target.value;
};

export const ProductResults = () => {
  const { cartItems } = useSelector(mapCartState);
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const { data } = products;

  console.log(cartItems);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  return (
    <PageWrapper>
      <div className="row">
        <div className="col-md-3">
          <div className="sticky-top">
            <ul className="list-group">
              <li className="list-group-item cursor-pointer active">
                All Categories
              </li>
              <li className="list-group-item cursor-pointer">Fruits</li>
              <li className="list-group-item cursor-pointer">Bread</li>
            </ul>
          </div>
        </div>
        <div className="col-md-9">
          <div className="row">
            {Array.isArray(data) &&
              data.length > 0 &&
              data.map((product, pos) => {
                const {
                  documentID,
                  productThumbnail,
                  productName,
                  productPrice,
                } = product;
                const cartItem = cartItems.find(
                  (x) => x.documentID === documentID
                );

                if (
                  !productThumbnail ||
                  !productName ||
                  typeof productPrice === "undefined"
                )
                  return null;

                const configProduct = {
                  ...product,
                  ...cartItem,
                };

                return <ProductCard key={pos} {...configProduct} />;
              })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
