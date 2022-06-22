import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import PageWrapper from "../Wrapper/page-wrapper";

import Button from "./../../components/forms/Button";

const OrderHistory = ({ orders }) => {
  const navigate = useNavigate();

  return (
    <>
      <PageWrapper>
        <div>
        <h1>Order History</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              id="searchInput"
              className="form-control"
              placeholder="Search"
            />
          </div>
          <table className="table" id="productGrid">
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Order Date</th>
                <th style={{ width: "20%" }}>Order ID</th>
                <th style={{ width: "20%" }}>Amount</th>
                <th className="text-center" width={200}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(orders) &&
                orders.length > 0 &&
                orders.map((order, index) => {
                  const { documentID, orderCreatedDate, orderTotal } = order;

                  return (
                    <tr key={index}>
                      <td>{moment(orderCreatedDate.nano).format("DD/MM/YYYY")}</td>
                      <td>{documentID}</td>
                      <td>${orderTotal}</td>

                      <td align="center">
                        <Button
                          className="btn btn-danger"
                          onClick={() => navigate(`/orderDetail/${documentID}`)}
                        >
                          Details
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

export default OrderHistory;
