import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsStart,
  deleteProductStart,
} from "./../../redux/Products/products.actions";
import PageWrapper from "../Wrapper/page-wrapper";

import Button from "./../../components/forms/Button";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ManageProduct = (props) => {
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const { data } = products;

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);
  return (
    <>
      <PageWrapper>
        <div>
          <div className="input-group mb-3">
            <input type="text" className="form-control" placeholder="Search" />
            <div className="input-group-append">
              <Link className="btn btn-success" to="/addproduct">
                Create new Product
              </Link>
            </div>
          </div>
          <table className="table">
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Thumbnail</th>
                <th style={{ width: "20%" }}>Title</th>
                <th style={{ width: "20%" }}>Price</th>
                <th style={{ width: "20%" }}>Category</th>

                <th className="text-center" width={200}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(data) &&
                data.length > 0 &&
                data.map((product, index) => {
                  const {
                    productName,
                    productThumbnail,
                    productPrice,
                    productCategory,
                    documentID,
                  } = product;

                  return (
                    <tr key={index}>
                      <td>
                        <img
                          style={{ maxWidth: "100%", height: "200px" }}
                          alt="test"
                          src={productThumbnail}
                        />
                      </td>
                      <td>{productName}</td>
                      <td>${productPrice}</td>
                      <td>
                        {productCategory.replace(
                          /(\w)(\w*)/g,
                          function (g0, g1, g2) {
                            return g1.toUpperCase() + g2.toLowerCase();
                          }
                        )}
                      </td>

                      <td>
                        <Button className="btn btn-danger mr-2">Edit</Button>
                        <Button
                          className="btn btn-danger"
                          onClick={() =>
                            dispatch(deleteProductStart(documentID))
                          }
                        >
                          Delete
                        </Button>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </div>
      </PageWrapper>
    </>
  );
};

export default ManageProduct;
