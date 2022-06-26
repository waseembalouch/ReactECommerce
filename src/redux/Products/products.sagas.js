import { auth } from "./../../firebase/utils";
import { takeLatest, put, all, call } from "redux-saga/effects";
import {
  setProducts,
  setProduct,
  fetchProductsStart,
} from "./products.actions";
import {
  handleAddProduct,
  handleFetchProducts,
  handleFetchProduct,
  handleDeleteProduct,
} from "./products.helpers";
import productsTypes from "./products.types";
import {  handleLoader } from "../Application/app.actions";
import appConstants from "../../Utils/appConstants";
import { toast } from "react-toastify";

export function* addProduct({ payload }) {
  try {
    yield put(handleLoader(true));
    const timestamp = new Date();
    yield handleAddProduct({
      ...payload,
      productAdminUserUID: auth.currentUser.uid,
      createdDate: timestamp,
    });
    toast.success(appConstants.RECORD_SAVED_SUCCESSFULLY);
    yield put(fetchProductsStart());
  } catch (err) {
    toast.error(appConstants.GENERIC_ERROR_MESSAGE);
  } finally {
    yield put(handleLoader(false));
  }
}

export function* onAddProductStart() {
  yield takeLatest(productsTypes.ADD_NEW_PRODUCT_START, addProduct);
}

export function* fetchProducts({ payload }) {
  try {
    yield put(handleLoader(true));
    const products = yield handleFetchProducts(payload);
    yield put(setProducts(products));
  } catch (err) {
    toast.error(appConstants.GENERIC_ERROR_MESSAGE);
  } finally {
    yield put(handleLoader(false));
  }
}

export function* onFetchProductsStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCTS_START, fetchProducts);
}

export function* deleteProduct({ payload }) {
  try {
    yield put(handleLoader(true));
    yield handleDeleteProduct(payload);
    yield put(fetchProductsStart());
  } catch (err) {
    toast.error(appConstants.GENERIC_ERROR_MESSAGE);
  } finally {
    yield put(handleLoader(false));
  }
}

export function* onDeleteProductStart() {
  yield takeLatest(productsTypes.DELETE_PRODUCT_START, deleteProduct);
}

export function* fetchProduct({ payload }) {
  try {
    yield put(handleLoader(true));
    const product = yield handleFetchProduct(payload);
    yield put(setProduct(product));
  } catch (err) {
    toast.error(appConstants.GENERIC_ERROR_MESSAGE);
  } finally {
    yield put(handleLoader(false));
  }
}

export function* onFetchProductStart() {
  yield takeLatest(productsTypes.FETCH_PRODUCT_START, fetchProduct);
}

export default function* productsSagas() {
  yield all([
    call(onAddProductStart),
    call(onFetchProductsStart),
    call(onDeleteProductStart),
    call(onFetchProductStart),
  ]);
}
