import appTypes from './app.types';

const INITIAL_STATE = {
  loading: false,

};

const appReducer = (state=INITIAL_STATE, action) => {
  switch(action.type) {
    case appTypes.ON_HANDLE_LOADER:
      return {
        ...state,
        loading: action.payload
      }
    default:
      return state;
  }
};

export default appReducer;