import axios from "axios";
import {
  LOAD_USERS_FAILED,
  LOAD_USERS_SUCCESS,
  MODIFY_USER_FAILED,
  MODIFY_USER_SUCCESS,
} from "./types";
import { tokenSet } from "../../helpers/tokenSet";

export const loadUsers = () => (dispatch) => {
  tokenSet();
  axios
    .get("/admin/users")
    .then((res) => {
      dispatch({
        type: LOAD_USERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOAD_USERS_FAILED,
        payload: err.response.data.errors,
      });
    });
};

export const modifyUser = (info) => (dispatch) => {
  tokenSet();
  axios
    .put("/admin/edituser", info)
    .then((res) => {
      dispatch({
        type: MODIFY_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: MODIFY_USER_FAILED,
        payload: err.response.data.errors,
      });
    });
};
