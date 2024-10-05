import axios from "axios";
import { useNavigate } from "react-router-dom";
export const AUTHENTICATE_CUSTOMER = "AUTHENTICATE_CUSTOMER";
export const UNAUTHENTICATE_CUSTOMER = "UNAUTHENTICATE_CUSTOMER";
export const FETCH_CUSTOMER_ACCOUNT_PROFILE = "FETCH_CUSTOMER_ACCOUNT_PROFILE";

export const VALIDATION_ERROR = "VALIDATION_ERROR";

export const AUTHENTICATE_ADMIN = "AUTHENTICATE_ADMIN";
export const UNAUTHENTICATE_ADMIN = "UNAUTHENTICATE_ADMIN";

export const AUTHENTICATE_COOK = "AUTHENTICATE_COOK";
export const UNAUTHENTICATE_COOK = "UNAUTHENTICATE_COOK";

export function setCustomerLoginStatus(token) {
  return function (dispatch) {
    dispatch({
      type: AUTHENTICATE_CUSTOMER,
      payload: token,
    });
  };
}
export function setAdminLoginStatus(token) {
  return function (dispatch) {
    dispatch({
      type: AUTHENTICATE_ADMIN,
      payload: token,
    });
  };
}
export function setCookLoginStatus(token) {
  return function (dispatch) {
    dispatch({
      type: AUTHENTICATE_COOK,
      payload: token,
    });
  };
}
export function logout() {
  return function (dispatch) {
    localStorage.removeItem("customer");
    localStorage.removeItem("admin");
    localStorage.removeItem("cook");
    dispatch({ type: UNAUTHENTICATE_CUSTOMER });
    dispatch({ type: UNAUTHENTICATE_ADMIN });
    dispatch({ type: UNAUTHENTICATE_COOK });
    useNavigate("/login");
  };
}
export function validation(error) {
  return {
    type: VALIDATION_ERROR,
    payload: error,
  };
}
export function validationNull() {
  return {
    type: VALIDATION_ERROR,
    payload: null,
  };
}
// common axios call

export function getCustomerProfile() {
  if (!(typeof window !== "undefined")) return false;
  return function (dispatch) {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_API_URL + "/account/customer/profile"}`,
      headers: {
        customer: localStorage.getItem("customer"),
      },
    })
      .then((response) => {
        if (response !== undefined && response.data !== undefined) {
          dispatch({
            type: FETCH_CUSTOMER_ACCOUNT_PROFILE,
            payload: response.data,
          });
        }
      })
      .catch((response) => {});
  };
}
export function updateCustomerProfile(formData, callback) {
  return function (dispatch) {
    axios({
      method: "put",
      url: `${
        process.env.REACT_APP_API_URL + "/account/customer/update/profile"
      }`,
      data: formData,
      headers: {
        customer: localStorage.getItem("customer"),
      },
    })
      .then((response) => {
        if (!response.data.error && response.data) {
          dispatch(getCustomerProfile());
          callback(null, true);
        } else {
          dispatch(validation(response.data.error));
        }
      })
      .catch((response) => {});
  };
}
export function forgotPassword(email, callback) {
  return function(dispatch) {
    axios({
       method: 'post',
       url: `${process.env.REACT_APP_API_URL}/account/user/forgot-password`,
       data: email,
      })
      .then(response => {
        if(!response.data.error){
          callback(null, response);
        } else {
          dispatch(validation(response.data.error));
        }
      })
      .catch(response => {
        dispatch(validation(response.data.error));
      });
  }
}
