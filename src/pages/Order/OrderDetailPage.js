import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrderDetailsStart } from "../../redux/Orders/orders.actions";
import { useDispatch, useSelector } from "react-redux";
import OrderDetails from "../../components/OrderDetails";
import PageWrapper from "../../components/Wrapper/page-wrapper";

const mapState = ({ ordersData }) => ({
  orderDetails: ordersData.orderDetails,
});

const OrderDetailPage = () => {
  const { orderID } = useParams();
  const dispatch = useDispatch();
  const { orderDetails } = useSelector(mapState);
  const { orderTotal } = orderDetails;

  useEffect(() => {
    dispatch(getOrderDetailsStart(orderID));
  }, []);

  return (
    <div>
      <PageWrapper>
        <h1>Order ID: #{orderID}</h1>

        <OrderDetails order={orderDetails} />

        <h3>Total: {orderTotal}</h3>
      </PageWrapper>
    </div>
  );
};

export default OrderDetailPage;
