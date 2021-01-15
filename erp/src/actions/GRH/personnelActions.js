import axios from "axios";
import { tokenSet } from "../../helpers/tokenSet";
import {
  LOAD_PERSONNEL_SUCCESS,
  LOAD_PERSONNEL_FAILED,
  ADD_PERSONNEL_FAILED,
  ADD_PERSONNEL_SUCCESS,
  EDIT_PERSONNEL_SUCCESS,
  EDIT_PERSONNEL_FAILED,
  DELETE_PERSONNEL_SUCCESS,
  DELETE_PERSONNEL_FAILED,
} from "./types";

export const loadPersonnel = () => (dispatch) => {
  tokenSet();
  axios
    .get("/api/personnel")
    .then((res) => {
      dispatch({
        type: LOAD_PERSONNEL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOAD_PERSONNEL_FAILED,
        payload: err.response.data,
      });
    });
};

export const addPersonnel = (personnel) => (dispatch) => {
  tokenSet();
  axios
    .post("/api/personnel", personnel)
    .then((res) => {
      dispatch({
        type: ADD_PERSONNEL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_PERSONNEL_FAILED,
        payload: err.response.data.errors,
      });
    });
};
export const editPersonnel = (personnel) => (dispatch) => {
  tokenSet();
  axios
    .put(`/api/personnel`, personnel)
    .then((res) => {
      dispatch({
        type: EDIT_PERSONNEL_SUCCESS,
        payload: res.data,
      });
    })
   
    .catch((err) => {
      dispatch({
        type: EDIT_PERSONNEL_FAILED,
        payload: err.response.data.errors,
      });
    });
};

export const deletePersonnel = (id) => (dispatch) => {
  tokenSet();
  axios
    .delete("/api/personnel/"+ id)
    .then((res) => {
      dispatch({
        type: DELETE_PERSONNEL_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_PERSONNEL_FAILED,
        payload: err.response.data.errors,
      });
    });
};
