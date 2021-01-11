import axios from "axios";
import {
  ADD_USER_SUCCESS,
  ADD_USER_FAILED,
  DELETE_USER_FAILED,
  DELETE_USER_SUCCESS,
  LOAD_ROLES_FAILED,
  LOAD_ROLES_SUCCESS,
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

export const loadRoles = () => (dispatch) => {
  tokenSet();
  axios
    .get("/admin/roles")
    .then((res) => {
      dispatch({
        type: LOAD_ROLES_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOAD_ROLES_FAILED,
        payload: err.response.data.errors,
      });
    });
};

export const deleteUser = (id) => (dispatch) => {
  tokenSet();
  axios
    .delete(`/admin/deleteuser/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_USER_FAILED,
        payload: err.response.data.errors,
      });
    });
};

export const addUser = (user) => (dispatch) => {
  tokenSet();
  axios
    .post("/admin/adduser", user)
    .then((res) => {
      dispatch({
        type: ADD_USER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_USER_FAILED,
        payload: err.response.data.errors,
      });
    });
};
