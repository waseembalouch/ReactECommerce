import React, { useEffect, useState } from "react";

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
  const [productCategory, setProductCategory] = useState("");
  const dispatch = useDispatch();
  const { data } = products;
  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);

  const handleCategoryFilter = (e) => {
    [].forEach.call(
      document.getElementsByClassName("list-group-item"),
      function (el) {
        el.classList.remove("active");
      }
    );

    let catFilter = e.target.innerHTML.toLowerCase();
    e.target.classList.add("active");
    if (catFilter === "all categories") {
      catFilter = null;
    }
    dispatch(fetchProductsStart({ filterType: catFilter }));
  };

  const categories = ["fruits", "beverage", "meat", "seafood", "dairy"];

  return (
    <PageWrapper>
      <div className="row">
        <div className="col-md-3">
          <div className="sticky-top">
            <ul className="list-group">
              <li
                className="list-group-item cursor-pointer active"
                onClick={(ev) => handleCategoryFilter(ev)}
              >
                All Categories
              </li>

              {categories.map((item, pos) => {
                return (
                  <li
                    key={pos}
                    value={item}
                    onClick={(ev) => handleCategoryFilter(ev)}
                    className="list-group-item cursor-pointer"
                  >
                    {item.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                      return g1.toUpperCase() + g2.toLowerCase();
                    })}
                  </li>
                );
              })}
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
