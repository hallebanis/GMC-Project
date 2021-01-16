import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGOUT,
} from "./types";
import axios from "axios";

export const loginAction = (info) => (dispatch) => {
  axios
    .post("/login", info)
    .then((res) => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOGIN_FAILED,
        payload: err.response.data.errors,
      });
    });
};

export const registerAction = (info) => (dispatch) => {
  axios
    .post("/register", info)
    .then((res) => {
      dispatch({
        type: REGISTRATION_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: REGISTRATION_FAILED,
        payload: err.response.data.errors,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  dispatch({
    type: LOGOUT,
  });
};
