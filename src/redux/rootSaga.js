import { all, call } from "redux-saga/effects";

import userSagas from "./User/user.sagas";
import productsSagas from "./Products/products.sagas";
import ordersSagas from "./Orders/orders.sagas";
import appSagas from "./Application/app.sagas";

export default function* rootSaga() {
  yield all([
    call(userSagas),
    call(productsSagas),
    call(ordersSagas),
    call(appSagas),
  ]);
}
