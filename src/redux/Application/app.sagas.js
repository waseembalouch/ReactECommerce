import { takeLatest, put, all, call } from "redux-saga/effects";
import { handleLoader } from "./app.actions";
import appTypes from "./app.types";

export function* onShowLoader({ payload }) {
  try {
    yield put(handleLoader(payload));
  } catch (error) {
    console.log(error);
  }
}

export function* onShowLoaderStart() {
  yield takeLatest(appTypes.ON_HANDLE_LOADER_START, onShowLoader);
}

export default function* appSagas() {
  yield all([call(onShowLoaderStart)]);
}
