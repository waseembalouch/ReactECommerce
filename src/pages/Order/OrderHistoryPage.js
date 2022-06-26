import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserOrderHistory } from "../../redux/Orders/orders.actions";
import OrderHistory from "../../components/OrderHistory";
import { checkUserIsAdmin } from "../../Utils";

const mapState = ({ user, ordersData }) => ({
  currentUser: user.currentUser,
  orderHistory: ordersData.orderHistory.data,
});

const OrderHistoryPage = () => {
  const dispatch = useDispatch();
  const { currentUser, orderHistory } = useSelector(mapState);
  const isAdmin = checkUserIsAdmin(currentUser);

  useEffect(() => {
    dispatch(getUserOrderHistory({ uid: currentUser.id, isAdmin: isAdmin }));
  }, []);

  return (
    <>
      <OrderHistory orders={orderHistory} />
    </>
  );
};

export default OrderHistoryPage;
