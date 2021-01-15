import axios from "axios";
import { ADD_CLIENT_FAILED, ADD_CLIENT_SUCCESS } from "./types";

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
