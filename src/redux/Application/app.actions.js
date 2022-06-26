import appTypes from "./app.types";

export const handleLoader = (loaderAction) => ({
  type: appTypes.ON_HANDLE_LOADER,
  payload: loaderAction,
});

