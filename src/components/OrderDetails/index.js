import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setOrderDetails } from "../../redux/Orders/orders.actions";
import PageWrapper from "../Wrapper/page-wrapper";

const OrderDetails = ({ order }) => {
  const dispatch = useDispatch();
  const orderItems = order && order.orderItems;

  useEffect(() => {
    return () => {
      dispatch(setOrderDetails({}));
    };
  }, []);

  return (
    <>
      <div>
        <table className="table">
          <thead>
            <tr>
              <th style={{ width: "20%" }}>Thumbnail</th>
              <th style={{ width: "20%" }}>Name</th>
              <th style={{ width: "20%" }}>Price</th>
              <th style={{ width: "20%" }}>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(orderItems) &&
              orderItems.length > 0 &&
              orderItems.map((item, index) => {
                const {
                  productThumbnail,
                  productName,
                  productPrice,
                  quantity,
                } = item;

                return (
                  <tr key={index}>
                    <td>
                      <img
                        src={productThumbnail}
                        style={{ maxWidth: "100%", height: "200px" }}
                      />
                    </td>
                    <td>{productName}</td>
                    <td>${productPrice}</td>
                    <td>{quantity}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default OrderDetails;
