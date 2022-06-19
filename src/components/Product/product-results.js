import React, {  useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchProductsStart } from "./../../redux/Products/products.actions";
import PageWrapper from "../Wrapper/page-wrapper";

import ProductCard from "./product-card";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});


const handleFilter = (e) => {
  const nextFilter = e.target.value;

};


export const ProductResults = () => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const { data } = products;

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
                data.length > 0 &&  data.map((product, pos) => {

              const { productThumbnail, productName, productPrice } = product;
              if (
                !productThumbnail ||
                !productName ||
                typeof productPrice === "undefined"
              )
                return null;

              const configProduct = {
                ...product,
              };

              return <ProductCard key={pos} {...configProduct} />;
            })}
          </div>
        </div>
      </div>
    </PageWrapper>
  );
};
