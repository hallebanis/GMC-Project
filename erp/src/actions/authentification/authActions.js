import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTRATION_SUCCESS,
  REGISTRATION_FAILED,
  LOGOUT,
} from "./types";
import axios from "axios";
import { tokenSet } from "../../helpers/tokenSet";
import {
  LOAD_PERSONNEL_ID_FAILED,
  LOAD_PERSONNEL_ID_SUCCESS,
} from "../admin/types";

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

export const loadPersonnelById = (id) => (dispatch) => {
  tokenSet();
  axios
    .get(`/user/loadpersonnel/${id}`)
    .then((res) =>
      dispatch({
        type: LOAD_PERSONNEL_ID_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: LOAD_PERSONNEL_ID_FAILED,
        payload: err.response.data.errors,
      })
    );
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
