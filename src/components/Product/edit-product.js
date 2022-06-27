import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductStart,
  editProductStart,
} from "./../../redux/Products/products.actions";
import FormInput from "../forms/FormInput";
import FormSelect from "../forms/FormSelect";
import Button from "../forms/Button";
import { useNavigate } from "react-router-dom";
import PageWrapper from "../Wrapper/page-wrapper";

const mapState = ({ productsData }) => ({
  product: productsData.product,
});

const EditProduct = (props) => {
  const navigate = useNavigate();
  const { documentID } = useParams();
  /// Edit Case
  const { product } = useSelector(mapState);
  useEffect(() => {
    dispatch(fetchProductStart(documentID));
  }, []);

  const dispatch = useDispatch();
  const [productDocumentID, setDocumentID] = useState(product.documentID);
  const [productCategory, setProductCategory] = useState(
    product.productCategory
  );
  const [productName, setProductName] = useState(product.productName);
  const [productThumbnail, setProductThumbnail] = useState(
    product.productThumbnail
  );
  const [productPrice, setProductPrice] = useState(product.productPrice);
  const [productDesc, setProductDesc] = useState(product.productDesc);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      editProductStart({
        productDocumentID,
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDesc,
      })
    );
    navigate("/manageproduct");
  };

  return (
    <>
      <PageWrapper>
        <div className="row">
          <div className="col-md-6">
            <form onSubmit={handleSubmit}>
              <FormInput
                label="Name"
                type="text"
                value={productName}
                handleChange={(e) => setProductName(e.target.value)}
              />

              <FormInput
                label="Price"
                type="number"
                min="0.00"
                max="10000.00"
                step="0.01"
                value={productPrice}
                handleChange={(e) => setProductPrice(e.target.value)}
              />

              <FormSelect
                label="Category"
                options={[
                  {
                    value: "fruits",
                    name: "Fruits",
                  },
                  {
                    value: "beverage",
                    name: "Beverage",
                  },
                  {
                    value: "meat",
                    name: "Meat",
                  },
                  {
                    value: "seafood",
                    name: "Seafood",
                  },
                  {
                    value: "dairy",
                    name: "Dairy",
                  },
                ]}
                handleChange={(e) => setProductCategory(e.target.value)}
              />
              <FormInput
                label="Image URL"
                type="url"
                value={productThumbnail}
                handleChange={(e) => setProductThumbnail(e.target.value)}
              />

              <div>
                <Button className="btn btn-primary mr-2" type="submit">
                  Submit
                </Button>
                <Button
                  className="btn btn-default"
                  type="button"
                  onClick={() => navigate("/manageproduct")}
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <div className="card">
              <img
                className="card-img-top"
                src={productThumbnail}
                style={{ width: "538px", height: "220px" }}
              />
              <div className="card-body">
                <h2 className="card-title">
                  Product:
                  {productName &&
                    productName.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                      return g1.toUpperCase() + g2.toLowerCase();
                    })}
                </h2>
                <h5 className="card-text">
                  Category:
                  {productCategory &&
                    productCategory.replace(
                      /(\w)(\w*)/g,
                      function (g0, g1, g2) {
                        return g1.toUpperCase() + g2.toLowerCase();
                      }
                    )}
                </h5>
                <h5 className="card-text">Price: {productPrice}</h5>
              </div>
            </div>
          </div>
        </div>
      </PageWrapper>
    </>
  );
};

export default EditProduct;
