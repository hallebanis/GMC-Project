import axios from "axios";
import { LOAD_PERSONNEL_SUCCESS, LOAD_PERSONNEL_FAILED } from "./types";
export const loadPersonnel = () => (dispatch) => {
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
