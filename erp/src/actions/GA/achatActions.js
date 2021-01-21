import axios from ('axios');
import { tokenSet } from "../../helpers/tokenSet";
import {
    ADD_CATEGORIE_FAILED,
    ADD_CATEGORIE_SUCCESS,
    ADD_COMMANDEACHAT_FAILED,
    ADD_COMMANDEACHAT_SUCCESS,
    ADD_COMPTEBANCAIRE_FAILED,
    ADD_COMPTEBANCAIRE_SUCCESS,
    ADD_FACTURE_FAILED,
    ADD_FACTURE_SUCCESS,
    ADD_PRODUIT_FAILED,
    ADD_PRODUIT_SUCCESS,
    DELETE_COMMANDEACHAT_FAILED,
    DELETE_COMMANDEACHAT_SUCCESS,
    DELETE_COMPTEBANCAIRE_FAILED,
    DELETE_COMPTEBANCAIRE_SUCCESS,
    DELETE_FACTURE_FAILED,
    DELETE_FACTURE_SUCCESS,
    DELETE_PRODUIT_FAILED,
    DELETE_PRODUIT_SUCCESS,
    GET_CATEGORIE_FAILED,
    GET_CATEGORIE_SUCCESS,
    GET_COMMANDEACHAT_FAILED,
    GET_COMMANDEACHAT_SUCCESS,
    GET_COMPTEBANCAIRE_FAILED,
    GET_COMPTEBANCAIRE_SUCCESS,
    GET_FACTURE_FAILED,
    GET_FACTURE_SUCCESS,
    GET_PRODUIT_FAILED,
    GET_PRODUIT_SUCCESS,
    UPDATE_COMMANDEACHAT_FAILED,
    UPDATE_COMMANDEACHAT_SUCCESS,
    UPDATE_FACTURE_FAILED,
    UPDATE_FACTURE_SUCCESS,
    UPDATE_PRODUIT_FAILED,
    UPDATE_PRODUIT_SUCCESS
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
      .get("/api/allCommande")
      .then((res) =>
        dispatch({
          type: GET_COMMANDEACHAT_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: GET_COMMANDEACHAT_FAILED,
          payload: err.response.data.errors,
        })
      );
  };
  //3-Update CommandeAchat Action
  export const updateCommandeAchat = (commandeAchat) => (dispatch) => {
    tokenSet();
    axios
      .put("/api/updateCommande", commandeAchat)
      .then((res) =>
        dispatch({
          type: UPDATE_COMMANDEACHAT_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: UPDATE_COMMANDEACHAT_FAILED,
          payload: err.response.data.errors,
        })
      );
  };
  //4-Delete CommandeAchat Action
  export const deleteCommandeAchat = (id) => (dispatch) => {
    tokenSet();
    axios
      .delete(`/api/deleteCommande/${id}`)
      .then((res) =>
        dispatch({
          type: DELETE_COMMANDEACHAT_SUCCESS,
          payload: res.data,
        })
      )
      .catch((err) =>
        dispatch({
          type: DELETE_COMMANDEACHAT_FAILED,
          payload: err.response.data.errors,
        })
      );
  };

  //Actions of Compte Bancaire
// 1-Add Compte Bancaire Action
export const addCompteBanquaire = (compteBanquaire) => (dispatch) => {
  tokenSet();
  axios
    .post("/api/compteBancaire", compteBanquaire)
    .then((res) =>
      dispatch({
        type: ADD_COMPTEBANCAIRE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_COMPTEBANCAIRE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get CompteBanquaire Action
export const getCompteBanquaire = () => (dispatch) => {
  tokenSet();
  axios
    .get("/api/Compte")
    .then((res) =>
      dispatch({
        type: GET_COMPTEBANCAIRE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_COMPTEBANCAIRE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update CompteBanquaire Action
export const updateCompteBanquaire = (compteBanquaire) => (dispatch) => {
  tokenSet();
  axios
    .put("/api/updateCompte", compteBanquaire)
    .then((res) =>
      dispatch({
        type: UPDATE_COMPTEBANCAIRE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_COMPTEBANCAIRE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete CompteBanquaire Action
export const deleteCompteBanquaire = (id) => (dispatch) => {
  tokenSet();
  axios
    .delete(`/api/deleteCompte/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_COMPTEBANCAIRE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_COMPTEBANCAIRE_FAILED,
        payload: err.response.data.errors,
      })
    );
};

//Actions of Facture
// 1-Add Facture Action
export const addFacture = (facture) => (dispatch) => {
  tokenSet();
  axios
    .post("/api/addFacture", facture)
    .then((res) =>
      dispatch({
        type: ADD_FACTURE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_FACTURE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get Facture Action
export const getFacture = () => (dispatch) => {
  tokenSet();
  axios
    .get("/api/allFacture")
    .then((res) =>
      dispatch({
        type: GET_FACTURE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_FACTURE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update Facture Action
export const updateFacture = (facture) => (dispatch) => {
  tokenSet();
  axios
    .put("/api/updateFacture", facture)
    .then((res) =>
      dispatch({
        type: UPDATE_FACTURE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_FACTURE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete Facture Action
export const deleteFacture = (id) => (dispatch) => {
  tokenSet();
  axios
    .delete(`/api/deleteFacture/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_FACTURE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_FACTURE_FAILED,
        payload: err.response.data.errors,
      })
    );
};


//Actions of Produit
// 1-Add Produit Action
export const addProduit = (produit) => (dispatch) => {
  tokenSet();
  axios
    .post("/api/addProduit", produit)
    .then((res) =>
      dispatch({
        type: ADD_PRODUIT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_PRODUIT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get Produit Action
export const getProduit = () => (dispatch) => {
  tokenSet();
  axios
    .get("/api/allProduit")
    .then((res) =>
      dispatch({
        type: GET_PRODUIT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_PRODUIT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update Produit Action
export const updateProduit = (produit) => (dispatch) => {
  tokenSet();
  axios
    .put("/api/updateProduit", produit)
    .then((res) =>
      dispatch({
        type: UPDATE_PRODUIT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_PRODUIT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete Produit Action
export const deleteProduit = (id) => (dispatch) => {
  tokenSet();
  axios
    .delete(`/api/deleteproduit/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_PRODUIT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_PRODUIT_FAILED,
        payload: err.response.data.errors,
      })
    );
};

  