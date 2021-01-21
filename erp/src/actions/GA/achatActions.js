import axios from ('axios');
import { tokenSet } from "../../helpers/tokenSet";
import {
    ADD_CATEGORIE_FAILED,
    ADD_CATEGORIE_SUCCESS,
    GET_CATEGORIE_FAILED,
    GET_CATEGORIE_SUCCESS
} from "./types";


//Actions of Categorie
// 1-Add Categorie Action
export const addCategorie = (categorie) => (dispatch) => {
    tokenSet();
    axios
        .post("/api/addCategorie", categorie)
        .then((res) =>
            dispatch({
                type: ADD_CATEGORIE_SUCCESS,
                payload: res.data,
            })
        )
        .catch((err) =>
            dispatch({
                type: ADD_CATEGORIE_FAILED,
                payload: err.response.data.errors,
            })
        );
};
//2-Get Categorie Action
export const getCategorie = () => (dispatch) => {
    tokenSet();
    axios
        .get("/api/categories")
        .then((res) =>
            dispatch({
                type: GET_CATEGORIE_SUCCESS,
                payload: res.data,
            })
        )
        .catch((err) =>
            dispatch({
                type: GET_CATEGORIE_FAILED,
                payload: err.response.data.errors,
            })
        );
};
