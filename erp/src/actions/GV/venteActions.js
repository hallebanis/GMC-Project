import axios from "axios";
import {
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_FAILED,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAILED,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAILED,
  DELETE_CLIENT_SUCCESS,
  DELETE_CLIENT_FAILED,
} from "./types";

// Add Client Action
export const addClient = (client) => (dispatch) => {
  axios
    .post("/api/AddClient", client)
    .then((res) =>
      dispatch({
        type: ADD_CLIENT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_CLIENT_FAILED,
        payload: err.response.data.errors,
      })
    );
};

//Get Client Action
export const getClient = () => (dispatch) => {
  axios
    .get("/api/clients")
    .then((res) =>
      dispatch({
        type: GET_CLIENT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_CLIENT_FAILED,
        payload: err.response.data.errors,
      })
    );
};

//Update Client Action
export const updateClient = (client) => (dispatch) => {
  axios
    .put("/api/updateClient/", client)
    .then((res) =>
      dispatch({
        type: UPDATE_CLIENT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_CLIENT_FAILED,
        payload: err.response.data.errors,
      })
    );
};

//Delete Client Action
export const deleteClient = (id) => (dispatch) => {
  axios
    .delete(`/api/deleteClient/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_CLIENT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_CLIENT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
