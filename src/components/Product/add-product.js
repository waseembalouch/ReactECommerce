import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProductStart } from "./../../redux/Products/products.actions";
import FormInput from "../forms/FormInput";
import FormSelect from "../forms/FormSelect";
import Button from "../forms/Button";

import PageWrapper from "../Wrapper/page-wrapper";

const AddProduct = (props) => {
  const dispatch = useDispatch();
  const [productCategory, setProductCategory] = useState("fruits");
  const [productName, setProductName] = useState("");
  const [productThumbnail, setProductThumbnail] = useState(
    "https://dummyimage.com/600x220/000/fff"
  );
  const [productPrice, setProductPrice] = useState(0);
  const [productDesc, setProductDesc] = useState("");

  const resetForm = () => {
    setProductCategory("fruits");
    setProductName("");
    setProductThumbnail("");
    setProductPrice(0);
    setProductDesc("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addProductStart({
        productCategory,
        productName,
        productThumbnail,
        productPrice,
        productDesc,
      })
    );
    resetForm();
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
                    name: "seafood",
                  },
                  {
                    value: "dairy",
                    name: "dairy",
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
                <Button type="submit">Submit</Button>
                <a className="btn btn-default">Cancel</a>
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
                <h2 className="card-title">Product: {productName.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                    return g1.toUpperCase() + g2.toLowerCase();
                  })}</h2>
                <h5 className="card-text">
                  Category: {productCategory.replace(/(\w)(\w*)/g, function (g0, g1, g2) {
                    return g1.toUpperCase() + g2.toLowerCase();})}
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

export default AddProduct;
