import {
  GET_COMMANDEACHAT_FAILED,
  ADD_COMMANDEACHAT_FAILED,
  ADD_COMMANDEACHAT_SUCCESS,
  ADD_FACTURE_FAILED,
  ADD_FACTURE_SUCCESS,
  ADD_PRODUIT_FAILED,
  ADD_PRODUIT_SUCCESS,
  DELETE_COMMANDEACHAT_FAILED,
  DELETE_COMMANDEACHAT_SUCCESS,
  DELETE_FACTURE_FAILED,
  DELETE_FACTURE_SUCCESS,
  DELETE_PRODUIT_FAILED,
  DELETE_PRODUIT_SUCCESS,
  GET_COMMANDEACHAT_SUCCESS,
  GET_FACTURE_FAILED,
  GET_FACTURE_SUCCESS,
  GET_PRODUIT_FAILED,
  GET_PRODUIT_SUCCESS,
  UPDATE_COMMANDEACHAT_FAILED,
  UPDATE_COMMANDEACHAT_SUCCESS,
  UPDATE_FACTURE_SUCCESS,
  UPDATE_PRODUIT_FAILED,
  GET_CATEGORIE_SUCCESS,
  GET_CATEGORIE_FAILED,
} from "../../actions/GA/types";

const initState = {
  facture: [],
  errors: null,
  produit: [],
};
const achatReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUIT_SUCCESS:
      return {
        ...state,
        produit: [...state.produit, action.payload],
        errors: null,
      };
    case GET_PRODUIT_SUCCESS:
      return {
        ...state,
        errors: null,
        produit: action.payload,
      };
    case DELETE_PRODUIT_SUCCESS:
      return {
        ...state,
        produit: state.produit.filter((el) => el._id !== action.payload._id),
      };
    case GET_FACTURE_SUCCESS:
      return {
        ...state,
        errors: null,
        facture: action.payload,
      };
    case ADD_FACTURE_SUCCESS:
      return {
        ...state,
        facture: [...state.facture, action.payload],
        errors: null,
      };
    case DELETE_FACTURE_SUCCESS:
      return {
        ...state,
        facture: state.facture.filter((el) => el._id !== action.payload._id),
      };
    case UPDATE_FACTURE_SUCCESS:
      return {
        ...state,
        errors: null,
        facture: state.facture.map((el) => {
          if (el._id === action.payload._id) return action.payload;
          return el;
        }),
      };

    case GET_COMMANDEACHAT_SUCCESS:
      return {
        ...state,
        errors: null,
        commandeAchat: action.payload,
      };
    case ADD_COMMANDEACHAT_SUCCESS:
      return {
        ...state,
        commandeAchat: [...state.commandeAchat, action.payload],
        errors: null,
      };
    case DELETE_COMMANDEACHAT_SUCCESS:
      return {
        ...state,
        commandeAchat: state.commandeAchat.filter(
          (el) => el._id !== action.payload._id
        ),
      };

    case UPDATE_COMMANDEACHAT_SUCCESS:
      return {
        ...state,
        errors: null,
        commandeAchat: state.commandeAchat.map((el) => {
          if (el._id === action.payload._id) return action.payload;
          return el;
        }),
      };
    case GET_CATEGORIE_SUCCESS:
      return {
        ...state,
        categorie: action.payload,
        errors: null,
      };
    case GET_CATEGORIE_FAILED:
    case GET_PRODUIT_FAILED:
    case ADD_PRODUIT_FAILED:
    case UPDATE_PRODUIT_FAILED:
    case DELETE_PRODUIT_FAILED:
    case GET_FACTURE_FAILED:
    case ADD_FACTURE_FAILED:
    case DELETE_FACTURE_FAILED:
    case GET_COMMANDEACHAT_FAILED:
    case ADD_COMMANDEACHAT_FAILED:
    case UPDATE_COMMANDEACHAT_FAILED:
    case DELETE_COMMANDEACHAT_FAILED:
      return {
        ...state,
        errors: action.payload,
      };

    default:
      return state;
  }
};
export default achatReducer;
