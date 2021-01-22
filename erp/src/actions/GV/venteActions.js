import axios from "axios";
import { tokenSet } from "../../helpers/tokenSet";
import {
  ADD_CLIENT_SUCCESS,
  ADD_CLIENT_FAILED,
  GET_CLIENT_SUCCESS,
  GET_CLIENT_FAILED,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAILED,
  DELETE_CLIENT_SUCCESS,
  DELETE_CLIENT_FAILED,
  ADD_COMMANDEVENTE_SUCCESS,
  ADD_COMMANDEVENTE_FAILED,
  GET_COMMANDEVENTE_SUCCESS,
  GET_COMMANDEVENTE_FAILED,
  UPDATE_COMMANDEVENTE_SUCCESS,
  UPDATE_COMMANDEVENTE_FAILED,
  DELETE_COMMANDEVENTE_SUCCESS,
  DELETE_COMMANDEVENTE_FAILED,
  GET_CONTACT_FAILED,
  GET_CONTACT_SUCCESS,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_FAILED,
  UPDATE_CONTACT_FAILED,
  UPDATE_CONTACT_SUCCESS,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_FAILED,
  ADD_ENTREPRISE_SUCCESS,
  ADD_ENTREPRISE_FAILED,
  GET_ENTREPRISE_SUCCESS,
  GET_ENTREPRISE_FAILED,
  DELETE_ENTREPRISE_SUCCESS,
  DELETE_ENTREPRISE_FAILED,
  UPDATE_ENTREPRISE_SUCCESS,
  UPDATE_ENTREPRISE_FAILED,
  ADD_LIGNERESERVATION_SUCCESS,
  ADD_LIGNERESERVATION_FAILED,
  GET_LIGNERESERVATION_SUCCESS,
  GET_LIGNERESERVATION_FAILED,
  UPDATE_LIGNERESERVATION_FAILED,
  UPDATE_LIGNERESERVATION_SUCCESS,
  DELETE_LIGNERESERVATION_FAILED,
  DELETE_LIGNERESERVATION_SUCCESS,
  ADD_LIGNEVENTE_SUCCESS,
  ADD_LIGNEVENTE_FAILED,
  GET_LIGNEVENTE_FAILED,
  GET_LIGNEVENTE_SUCCESS,
  UPDATE_LIGNEVENTE_FAILED,
  UPDATE_LIGNEVENTE_SUCCESS,
  DELETE_LIGNEVENTE_SUCCESS,
  DELETE_LIGNEVENTE_FAILED,
  ADD_RESERVATION_SUCCESS,
  ADD_RESERVATION_FAILED,
  GET_RESERVATION_SUCCESS,
  GET_RESERVATION_FAILED,
  UPDATE_RESERVATION_SUCCESS,
  UPDATE_RESERVATION_FAILED,
  DELETE_RESERVATION_SUCCESS,
  DELETE_RESERVATION_FAILED,
  GET_TVA_SUCCESS,
  GET_TVA_FAILED,
  ADD_TVA_SUCCESS,
  ADD_TVA_FAILED,
  UPDATE_TVA_SUCCESS,
  UPDATE_TVA_FAILED,
  DELETE_TVA_SUCCESS,
  DELETE_TVA_FAILED,
  ADD_FACTUREVENTE_SUCCESS,
  ADD_FACTUREVENTE_FAILED,
  GET_FACTUREVENTE_SUCCESS,
  GET_FACTUREVENTE_FAILED,
  UPDATE_FACTUREVENTE_SUCCESS,
  UPDATE_FACTUREVENTE_FAILED,
  DELETE_FACTUREVENTE_SUCCESS,
  DELETE_FACTUREVENTE_FAILED,
} from "./types";

//Actions of Client
// 1-Add Client Action
export const addClient = (client) => (dispatch) => {
  tokenSet();
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
//2-Get Client Action
export const getClient = () => (dispatch) => {
  tokenSet();
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
//3-Update Client Action
export const updateClient = (client) => (dispatch) => {
  tokenSet();
  axios
    .put("/api/updateClient", client)
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
//4-Delete Client Action
export const deleteClient = (id) => (dispatch) => {
  tokenSet();
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

//Actions of CommandeVente
//1-Add CommandeVente Action
export const AddCommandeVente = (comVente) => (dispatch) => {
  tokenSet();
  axios
    .post("/api/AddCommandeVente", comVente)
    .then((res) =>
      dispatch({
        type: ADD_COMMANDEVENTE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_COMMANDEVENTE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get CommandeVente Action
export const getCommandeVente = () => (dispatch) => {
  tokenSet();
  axios
    .get("/api/CommandesVente")
    .then((res) =>
      dispatch({
        type: GET_COMMANDEVENTE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_COMMANDEVENTE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update CommandeVente Action
export const updateCommandeVente = (comVente) => (dispatch) => {
  tokenSet();
    axios
    .put("/api/updateCommVente", comVente)
    .then((res) =>
      dispatch({
        type: UPDATE_COMMANDEVENTE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_COMMANDEVENTE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete CommandeVente Action
export const deleteCommandeVente = (id) => (dispatch) => {
  tokenSet();
    axios
    .delete(`/api/deleteCommVente/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_COMMANDEVENTE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_COMMANDEVENTE_FAILED,
        payload: err.response.data.errors,
      })
    );
};

//Actions of Contact
//1-Add Contact Action
export const AddContact = (contact) => (dispatch) => {
  tokenSet();
  axios
    .post("/api/AddContact", contact)
    .then((res) =>
      dispatch({
        type: ADD_CONTACT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_CONTACT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get Contact Action
export const getContact = () => (dispatch) => {
  tokenSet();
  axios
    .get("/api/Contacts")
    .then((res) =>
      dispatch({
        type: GET_CONTACT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_CONTACT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update Contact Action
export const updateContact = (contact) => (dispatch) => {
  tokenSet();
  axios
    .put("/api/updateContact", contact)
    .then((res) =>
      dispatch({
        type: UPDATE_CONTACT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_CONTACT_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete Contact Action
export const deleteContact = (id) => (dispatch) => {
  tokenSet();
  axios
    .delete(`/api/deleteContact/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_CONTACT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_CONTACT_FAILED,
        payload: err.response.data.errors,
      })
    );
};

//Actions of Entreprise
// 1-Add Entreprise Action
export const addEntreprise = (entreprise) => (dispatch) => {
  tokenSet();
  axios
    .post("/api/AddEntreprise", entreprise)
    .then((res) =>
      dispatch({
        type: ADD_ENTREPRISE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_ENTREPRISE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get Entreprise Action
export const getEntreprise = () => (dispatch) => {
  tokenSet();
  axios
    .get("/api/Entreprises")
    .then((res) =>
      dispatch({
        type: GET_ENTREPRISE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_ENTREPRISE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update Entreprise Action
export const updateEntreprise = (Entreprise) => (dispatch) => {
  tokenSet();
  axios
    .put("/api/updateEntreprise", Entreprise)
    .then((res) =>
      dispatch({
        type: UPDATE_ENTREPRISE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_ENTREPRISE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete Entreprise Action
export const deleteEntreprise = (id) => (dispatch) => {
  tokenSet();
  axios
    .delete(`/api/deleteEntreprise/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_ENTREPRISE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_ENTREPRISE_FAILED,
        payload: err.response.data.errors,
      })
    );
};

//Actions of Facture Vente
// 1-Add Facture Vente Action
export const addFactureVente = (factureVente) => (dispatch) => {
  tokenSet();
  axios
    .post("/api/addFactureVente", factureVente)
    .then((res) =>
      dispatch({
        type: ADD_FACTUREVENTE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_FACTUREVENTE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get FactureVente Action
export const getFactureVente = () => (dispatch) => {
  tokenSet();
  axios
    .get("/api/allFactureVente")
    .then((res) =>
      dispatch({
        type: GET_FACTUREVENTE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_FACTUREVENTE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update FactureVente Action
export const updateFactureVente = (factureVente) => (dispatch) => {
  tokenSet();
  axios
    .put("/api/updateFactureVente", factureVente)
    .then((res) =>
      dispatch({
        type: UPDATE_FACTUREVENTE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_FACTUREVENTE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete FactureVente Action
export const deleteFactureVente = (id) => (dispatch) => {
  tokenSet();
  axios
    .delete(`/api/deleteFactureVente/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_FACTUREVENTE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_FACTUREVENTE_FAILED,
        payload: err.response.data.errors,
      })
    );
};


//Actions of LigneReservation:
// 1-Add LigneReservation Action
export const addLigneReservation = (LigneReservation) => (dispatch) => {
  tokenSet();
  axios
    .post("/api/AddLigneReservation", LigneReservation)
    .then((res) =>
      dispatch({
        type: ADD_LIGNERESERVATION_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_LIGNERESERVATION_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get LigneReservation Action
export const getLigneReservation = () => (dispatch) => {
  tokenSet();
  axios
    .get("/api/LignesReservation")
    .then((res) =>
      dispatch({
        type: GET_LIGNERESERVATION_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_LIGNERESERVATION_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update LigneReservation Action
export const updateLigneReservation = (LigneReservation) => (dispatch) => {
  tokenSet();
  axios
    .put("/api/updateLigneReservation", LigneReservation)
    .then((res) =>
      dispatch({
        type: UPDATE_LIGNERESERVATION_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_LIGNERESERVATION_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete LigneReservation Action
export const deleteLigneReservation = (id) => (dispatch) => {
  tokenSet();
  axios
    .delete(`/api/deleteLigneReservation/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_LIGNERESERVATION_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_LIGNERESERVATION_FAILED,
        payload: err.response.data.errors,
      })
    );
};

//Actions of LigneVente
// 1-Add LigneVente Action
export const addLigneVente = (LigneVente) => (dispatch) => {
  tokenSet();
  axios
    .post("/api/AddLigneVente", LigneVente)
    .then((res) =>
      dispatch({
        type: ADD_LIGNEVENTE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_LIGNEVENTE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get LigneVente Action
export const getLigneVente = () => (dispatch) => {
  tokenSet();
  axios
    .get("/api/LignesVente")
    .then((res) =>
      dispatch({
        type: GET_LIGNEVENTE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_LIGNEVENTE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update LigneVente Action
export const updateLigneVente = (LigneVente) => (dispatch) => {
  tokenSet();
  axios
    .put("/api/updateLigneVente", LigneVente)
    .then((res) =>
      dispatch({
        type: UPDATE_LIGNEVENTE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_LIGNEVENTE_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete LigneVente Action
export const deleteLigneVente = (id) => (dispatch) => {
  tokenSet();
  axios
    .delete(`/api/deleteLigneVente/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_LIGNEVENTE_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_LIGNEVENTE_FAILED,
        payload: err.response.data.errors,
      })
    );
};

//Actions of Reservation
// 1-Add Reservation Action
export const addReservation = (reservation) => (dispatch) => {
  tokenSet();
  axios
    .post("/api/AddReservation", reservation)
    .then((res) =>
      dispatch({
        type: ADD_RESERVATION_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_RESERVATION_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get Reservation Action
export const getReservation = () => (dispatch) => {
  tokenSet();
  axios
    .get("/api/reservations")
    .then((res) =>
      dispatch({
        type: GET_RESERVATION_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_RESERVATION_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update Reservation Action
export const updateReservation = (reservation) => (dispatch) => {
  tokenSet();
  axios
    .put("/api/updateReservation", reservation)
    .then((res) =>
      dispatch({
        type: UPDATE_RESERVATION_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_RESERVATION_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete Reservation Action
export const deleteReservation = (id) => (dispatch) => {
  tokenSet();
  axios
    .delete(`/api/deleteReservation/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_RESERVATION_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_RESERVATION_FAILED,
        payload: err.response.data.errors,
      })
    );
};

//Actions of TVA
// 1-Add TVA Action
export const addTVA = (TVA) => (dispatch) => {
  tokenSet();
  axios
    .post("/api/AddTVA", TVA)
    .then((res) =>
      dispatch({
        type: ADD_TVA_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: ADD_TVA_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//2-Get TVA Action
export const getTVA = () => (dispatch) => {
  tokenSet();
  axios
    .get("/api/TVAs")
    .then((res) =>
      dispatch({
        type: GET_TVA_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: GET_TVA_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//3-Update TVA Action
export const updateTVA = (TVA) => (dispatch) => {
  tokenSet();
  axios
    .put("/api/updateTVA", TVA)
    .then((res) =>
      dispatch({
        type: UPDATE_TVA_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: UPDATE_TVA_FAILED,
        payload: err.response.data.errors,
      })
    );
};
//4-Delete TVA Action
export const deleteTVA = (id) => (dispatch) => {
  tokenSet();
  axios
    .delete(`/api/deleteTVA/${id}`)
    .then((res) =>
      dispatch({
        type: DELETE_TVA_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: DELETE_TVA_FAILED,
        payload: err.response.data.errors,
      })
    );
};




