import { LOGIN_SUCCESS, LOGIN_FAILED } from "./types";
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
