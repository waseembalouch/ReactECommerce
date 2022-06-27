import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsStart,
  deleteProductStart,
} from "./../../redux/Products/products.actions";
import PageWrapper from "../Wrapper/page-wrapper";
import { useNavigate } from "react-router-dom";

import Button from "./../../components/forms/Button";

const mapState = ({ productsData }) => ({
  products: productsData.products,
});

const ManageProduct = (props) => {
  const navigate = useNavigate();
  const { products } = useSelector(mapState);
  const dispatch = useDispatch();
  const { data } = products;

  const searchGrid = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("productGrid");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
        } else {
          tr[i].style.display = "none";
        }
      }
    }
  };

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, []);
  return (
    <>
      <PageWrapper>
        <div>
          <div className="input-group mb-3">
            <input type="text" id="searchInput" className="form-control" placeholder="Search Product" onKeyUp={searchGrid} />
            <div className="input-group-append">
              <Link className="btn btn-success" to="/addproduct">
                Create new Product
              </Link>
            </div>
          </div>
          <table className="table" id="productGrid">
            <thead>
              <tr>               
                <th style={{ width: "20%" }}>Title</th>
                <th style={{ width: "20%" }}>Price</th>
                <th style={{ width: "20%" }}>Category</th>
                <th style={{ width: "20%" }}>Thumbnail</th>
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
                        <img
                          style={{ maxWidth: "100%", height: "200px" }}
                          alt="test"
                          src={productThumbnail}
                        />
                      </td>
                      <td>
                        <Button className="btn btn-danger mr-2" onClick={() => navigate(`/editproduct/${documentID}`)}>Edit</Button>
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
