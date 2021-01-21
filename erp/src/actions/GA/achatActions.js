import axios from ('axios');
import { tokenSet } from "../../helpers/tokenSet";
import {
    ADD_CATEGORIE_FAILED,
    ADD_CATEGORIE_SUCCESS,
    ADD_COMMANDEACHAT_FAILED,
    ADD_COMMANDEACHAT_SUCCESS,
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


//Actions of Commande Achat
// 1-Add Commande Achat Action
export const addCommandeAchat = (commandeAchat) => (dispatch) => {
    tokenSet();
    axios
      .post("/api/addCommande", commandeAchat)
      .then((res) =>
        dispatch({
          type: ADD_COMMANDEACHAT_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: ADD_COMMANDEACHAT_FAILED,
          payload: err.response.data.errors,
        })
      );
  };
  //2-Get CommandeAchat Action
  export const getCommandeAchat = () => (dispatch) => {
    tokenSet();
    axios
      .get("/api/commandeAchats")
      .then((res) =>
        dispatch({
          type: GET_CommandeAchat_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: GET_CommandeAchat_FAILED,
          payload: err.response.data.errors,
        })
      );
  };
  //3-Update CommandeAchat Action
  export const updateCommandeAchat = (commandeAchat) => (dispatch) => {
    tokenSet();
    axios
      .put("/api/updateCommandeAchat", commandeAchat)
      .then((res) =>
        dispatch({
          type: UPDATE_CommandeAchat_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: UPDATE_CommandeAchat_FAILED,
          payload: err.response.data.errors,
        })
      );
  };
  //4-Delete CommandeAchat Action
  export const deleteCommandeAchat = (id) => (dispatch) => {
    tokenSet();
    axios
      .delete(`/api/deleteCommandeAchat/${id}`)
      .then((res) =>
        dispatch({
          type: DELETE_CommandeAchat_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: DELETE_CommandeAchat_FAILED,
          payload: err.response.data.errors,
        })
      );
  };