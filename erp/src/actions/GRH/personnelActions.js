import axios from "axios";
import { tokenSet } from "../../helpers/tokenSet";
import {
  LOAD_PERSONNEL_SUCCESS,
  LOAD_PERSONNEL_FAILED,

  ADD_PERSONNEL_FAILED,
  ADD_PERSONNEL_SUCCESS,
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
    .post("/personnel", personnel)
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
