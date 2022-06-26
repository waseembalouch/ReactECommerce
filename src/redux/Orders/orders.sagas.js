import ordersTypes from "./orders.types";
import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  handleSaveOrder,
  handleGetUserOrderHistory,
  handleGetOrder,
} from "./orders.helpers";
import { auth } from "./../../firebase/utils";
import { clearCart } from "./../Cart/cart.actions";
import { setUserOrderHistory, setOrderDetails } from "./orders.actions";
import {  handleLoader } from "../Application/app.actions";
import appConstants from "../../Utils/appConstants";
import { toast } from "react-toastify";

export function* getUserOrderHistory({ payload }) {
  try {
    const {uid, isAdmin} = payload;
    yield put(handleLoader(true));
    const history = yield handleGetUserOrderHistory(uid, isAdmin);
    yield put(setUserOrderHistory(history));
  } catch (err) {
    toast.error(appConstants.GENERIC_ERROR_MESSAGE);
  } finally {
    yield put(handleLoader(false));
  }
}

export function* onGetUserOrderHistoryStart() {
  yield takeLatest(
    ordersTypes.GET_USER_ORDER_HISTORY_START,
    getUserOrderHistory
  );
}

export function* saveOrder({ payload }) {
  try {
    yield put(handleLoader(true));
    const timestamps = new Date();
    yield handleSaveOrder({
      ...payload,
      orderUserID: auth.currentUser.uid,
      orderCreatedDate: timestamps,
    });
    yield put(clearCart());
    toast.error(appConstants.RECORD_SAVED_SUCCESSFULLY);
  } catch (err) {
    toast.error(appConstants.GENERIC_ERROR_MESSAGE);
  } finally {
    yield put(handleLoader(false));
  }
}

export function* onSaveOrderHistoryStart() {
  yield takeLatest(ordersTypes.SAVE_ORDER_HISTORY_START, saveOrder);
}

export function* getOrderDetails({ payload }) {
  try {
    yield put(handleLoader(true));
    const order = yield handleGetOrder(payload);
    yield put(setOrderDetails(order));
  } catch (err) {
    toast.error(appConstants.GENERIC_ERROR_MESSAGE);
  } finally {
    yield put(handleLoader(false));
  }
}

export function* onGetOrderDetailsStart() {
  yield takeLatest(ordersTypes.GET_ORDER_DETAILS_START, getOrderDetails);
}

export default function* ordersSagas() {
  yield all([
    call(onSaveOrderHistoryStart),
    call(onGetUserOrderHistoryStart),
    call(onGetOrderDetailsStart),
  ]);
}
