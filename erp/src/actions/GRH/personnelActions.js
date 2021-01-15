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
  LOAD_CONTRAT_SUCCESS,
  LOAD_CONTRAT_FAILED,
  ADD_CONTRAT_SUCCESS,
  ADD_CONTRAT_FAILED,
  EDIT_CONTRAT_SUCCESS,
  EDIT_CONTRAT_FAILED,
  DELETE_CONTRAT_SUCCESS,
  DELETE_CONTRAT_FAILED,
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
    .delete("/api/personnel/" + id)
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
// INFORMATION ABOUT CONTRAT
export const addContrat = (contrat) => (dispatch) => {
  tokenSet();
  axios
    .post("/api/contrat", contrat)
    .then((res) => {
      dispatch({
        type: ADD_CONTRAT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: ADD_CONTRAT_FAILED,
        payload: err.response.data.errors,
      });
    });
};
export const loadContrat = () => (dispatch) => {
  tokenSet();
  axios
    .get("/api/contrat")
    .then((res) => {
      dispatch({
        type: LOAD_CONTRAT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: LOAD_CONTRAT_FAILED,
        payload: err.response.data.errors,
      });
    });
};

export const deleteContrat = (id) => (dispatch) => {
  tokenSet();
  axios
    .delete("/api/contrat/" + id)
    .then((res) => {
      dispatch({
        type: DELETE_CONTRAT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_CONTRAT_FAILED,
        payload: err.response.data.errors,
      });
    });
};

export const editContrat = (contrat) => (dispatch) => {
  tokenSet();
  axios
    .put("/api/contrat", contrat)
    .then((res) => {
      dispatch({
        type: EDIT_CONTRAT_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => {
      dispatch({
        type: EDIT_CONTRAT_FAILED,
        payload: err.response.data.errros,
      });
    });
};
