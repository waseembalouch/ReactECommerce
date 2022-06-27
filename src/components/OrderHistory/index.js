import React from "react";
import moment from "moment";
import { useNavigate } from "react-router-dom";

import PageWrapper from "../Wrapper/page-wrapper";

import Button from "./../../components/forms/Button";

const OrderHistory = ({ orders }) => {
  const navigate = useNavigate();

  const searchGrid = () => {
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("searchInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("orderGrid");
    tr = table.getElementsByTagName("tr");

    // Loop through all table rows, and hide those who don't match the search query
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
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
              placeholder="Search Order Id"
              onKeyUp={searchGrid}
            />
          </div>
          <table className="table" id="orderGrid">
            <thead>
              <tr>
                <th style={{ width: "20%" }}>Order Date</th>
                <th style={{ width: "20%" }}>Order ID</th>
                <th style={{ width: "20%" }}>Amount</th>
                <th style={{ width: "20%" }}>Customer</th>
                <th className="text-center" width={200}>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {Array.isArray(orders) &&
                orders.length > 0 &&
                orders.map((order, index) => {
                  const { documentID, orderCreatedDate, orderTotal, recipientName } = order;

                  return (
                    <tr key={index}>
                      <td>{moment(orderCreatedDate.nano).format("DD/MM/YYYY")}</td>
                      <td>{documentID}</td>
                      <td>${orderTotal}</td>
                      <td>{recipientName}</td>

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
