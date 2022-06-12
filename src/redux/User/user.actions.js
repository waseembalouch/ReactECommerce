import { auth, handleUserProfile, GoogleProvider } from "../../firebase/utils";
import userTypes from "./user.types";



export const emailSignInStart = userCredentials => ({
  type: userTypes.EMAIL_SIGN_IN_START,
  payload: userCredentials
});

export const signInSuccess = user => ({
  type: userTypes.SIGN_IN_SUCCESS,
  payload: user
});


export const checkUserSession = () => ({
  type: userTypes.CHECK_USER_SESSION
});





export const signOutUserStart = () => ({
  type: userTypes.SIGN_OUT_USER_START
});

export const signOutUserSuccess = () => ({
  type: userTypes.SIGN_OUT_USER_SUCCESS
});


export const signUpUserStart = userCredentials => ({
  type: userTypes.SIGN_UP_USER_START,
  payload: userCredentials
});


export const setCurrenUser = (user) => ({
  type: userTypes.SET_CURRENT_USER,
  payload: user,
});

export const resetAllAuthForms = () => ({
  type: userTypes.RESET_AUTH_FORMS,
});


export const userError = err => ({
  type: userTypes.USER_ERROR,
  payload: err
});

// export const signInUser =
//   ({ email, password }) =>
//   async (dispatch) => {
//     try {
//       auth.signInWithEmailAndPassword(email, password);
//       dispatch({ type: userTypes.SIGN_IN_SUCCESS, payload: true });
//     } catch (error) {
//       console.log(error);
//     }
//   };

export const signUpUser =
  ({ displayName, email, password, confirmPassword }) =>
  async (dispatch) => {
    if (password !== confirmPassword) {
      const err = ["Password Don't  match"];
      dispatch({ type: userTypes.SIGN_UP_ERROR, payload: err });
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await handleUserProfile(user, { displayName });
      dispatch({ type: userTypes.SIGN_UP_SUCCESS, payload: true });
    } catch (error) {
      console.log(error);
    }
  };

export const signInWithGoogle = () => async (dispatch) => {
  try {
    await auth.signInWithPopup(GoogleProvider).then(() => {
      dispatch({ type: userTypes.SIGN_IN_SUCCESS, payload: true });
    });
  } catch (error) {
    console.log(error);
  }
};

