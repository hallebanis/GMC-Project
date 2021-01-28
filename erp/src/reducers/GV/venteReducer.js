import {
  ADD_CLIENT_FAILED,
  ADD_CLIENT_SUCCESS,
  ADD_COMMANDEVENTE_FAILED,
  ADD_COMMANDEVENTE_SUCCESS,
  ADD_CONTACT_FAILED,
  ADD_CONTACT_SUCCESS,
  ADD_ENTREPRISE_FAILED,
  ADD_ENTREPRISE_SUCCESS,
  ADD_FACTUREVENTE_FAILED,
  ADD_FACTUREVENTE_SUCCESS,
  ADD_LIGNERESERVATION_FAILED,
  ADD_LIGNERESERVATION_SUCCESS,
  ADD_LIGNEVENTE_FAILED,
  ADD_LIGNEVENTE_SUCCESS,
  ADD_RESERVATION_FAILED,
  ADD_RESERVATION_SUCCESS,
  ADD_TVA_FAILED,
  ADD_TVA_SUCCESS,
  DELETE_CLIENT_FAILED,
  DELETE_CLIENT_SUCCESS,
  DELETE_COMMANDEVENTE_FAILED,
  DELETE_COMMANDEVENTE_SUCCESS,
  DELETE_CONTACT_FAILED,
  DELETE_CONTACT_SUCCESS,
  DELETE_ENTREPRISE_FAILED,
  DELETE_ENTREPRISE_SUCCESS,
  DELETE_FACTUREVENTE_FAILED,
  DELETE_FACTUREVENTE_SUCCESS,
  DELETE_LIGNERESERVATION_FAILED,
  DELETE_LIGNERESERVATION_SUCCESS,
  DELETE_LIGNEVENTE_FAILED,
  DELETE_LIGNEVENTE_SUCCESS,
  DELETE_RESERVATION_FAILED,
  DELETE_RESERVATION_SUCCESS,
  DELETE_TVA_FAILED,
  DELETE_TVA_SUCCESS,
  GET_CLIENT_FAILED,
  GET_CLIENT_SUCCESS,
  GET_COMMANDEVENTE_FAILED,
  GET_COMMANDEVENTE_SUCCESS,
  GET_CONTACT_FAILED,
  GET_CONTACT_SUCCESS,
  GET_ENTREPRISE_FAILED,
  GET_ENTREPRISE_SUCCESS,
  GET_FACTUREVENTE_FAILED,
  GET_FACTUREVENTE_SUCCESS,
  GET_LIGNERESERVATION_FAILED,
  GET_LIGNERESERVATION_SUCCESS,
  GET_LIGNEVENTE_FAILED,
  GET_LIGNEVENTE_SUCCESS,
  GET_PRODUIT_VENTE_FAILED,
  GET_PRODUIT_VENTE_SUCCESS,
  GET_RESERVATION_FAILED,
  GET_RESERVATION_SUCCESS,
  GET_TVA_FAILED,
  GET_TVA_SUCCESS,
  TOGGLE,
  UPDATE_CLIENT_FAILED,
  UPDATE_CLIENT_SUCCESS,
  UPDATE_COMMANDEVENTE_FAILED,
  UPDATE_COMMANDEVENTE_SUCCESS,
  UPDATE_CONTACT_FAILED,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_ENTREPRISE_FAILED,
  UPDATE_ENTREPRISE_SUCCESS,
  UPDATE_FACTUREVENTE_FAILED,
  UPDATE_FACTUREVENTE_SUCCESS,
  UPDATE_LIGNERESERVATION_FAILED,
  UPDATE_LIGNERESERVATION_SUCCESS,
  UPDATE_LIGNEVENTE_FAILED,
  UPDATE_LIGNEVENTE_SUCCESS,
  UPDATE_RESERVATION_FAILED,
  UPDATE_RESERVATION_SUCCESS,
  UPDATE_TVA_FAILED,
  UPDATE_TVA_SUCCESS,
  VALIDATE_COMMANDVENTE_FAILED,
  VALIDATE_COMMANDVENTE_SUCCESS,
} from "../../actions/GV/types";

const initState = {
  client: [],
  commandeVente: [],
  contact: [],
  entreprise: [],
  factureVente: [],
  ligneReservation: [],
  ligneVente: [],
  reservation: [],
  tva: [],
  produit: [],
  errors: null,
  toggle: false,
};
const venteReducer = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE:
      return {
        ...state,
        toggle: !state.toggle,
      };
    //CRUD SUCCESS:
    //CRUD Client SUCCESS:
    case ADD_CLIENT_SUCCESS:
      return {
        ...state,
        client: [...state.client, action.payload],
        errors: null,
      };
    case GET_CLIENT_SUCCESS:
      return {
        ...state,
        client: action.payload,
        errors: null,
      };
    case UPDATE_CLIENT_SUCCESS:
      return {
        ...state,
        errors: null,
        client: state.client.map((el) => {
          if (el._id === action.payload._id) return action.payload;
          return el;
        }),
      };
    case DELETE_CLIENT_SUCCESS:
      return {
        ...state,
        errors: null,
        client: state.client.filter((el) => el._id !== action.payload._id),
      };

    //CRUD Commande Vente SUCCESS:
    case ADD_COMMANDEVENTE_SUCCESS:
      return {
        ...state,
        commandeVente: [...state.commandeVente, action.payload],
        errors: null,
      };
    case GET_COMMANDEVENTE_SUCCESS:
      return {
        ...state,
        commandeVente: action.payload,
        errors: null,
      };
    case UPDATE_COMMANDEVENTE_SUCCESS:
      return {
        ...state,
        errors: null,
        commandeVente: state.commandeVente.map((el) => {
          if (el._id === action.payload._id) return action.payload;
          return el;
        }),
      };
    case DELETE_COMMANDEVENTE_SUCCESS:
      return {
        ...state,
        errors: null,
        commandeVente: state.commandeVente.filter(
          (el) => el._id !== action.payload._id
        ),
      };

    //CRUD Contact SUCCESS:
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        contact: [...state.contact, action.payload],
        errors: null,
      };
    case GET_CONTACT_SUCCESS:
      return {
        ...state,
        contact: action.payload,
        errors: null,
      };
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        errors: null,
        contact: state.contact.map((el) => {
          if (el._id === action.payload._id) return action.payload;
          return el;
        }),
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        errors: null,
        contact: state.contact.filter((el) => el._id !== action.payload._id),
      };

    //CRUD Entreprise SUCCESS:
    case ADD_ENTREPRISE_SUCCESS:
      return {
        ...state,
        entreprise: [...state.entreprise, action.payload],
        errors: null,
      };
    case GET_ENTREPRISE_SUCCESS:
      return {
        ...state,
        entreprise: action.payload,
        errors: null,
      };
    case UPDATE_ENTREPRISE_SUCCESS:
      return {
        ...state,
        errors: null,
        entreprise: state.entreprise.map((el) => {
          if (el._id === action.payload._id) return action.payload;
          return el;
        }),
      };
    case DELETE_ENTREPRISE_SUCCESS:
      return {
        ...state,
        errors: null,
        entreprise: state.entreprise.filter(
          (el) => el._id !== action.payload._id
        ),
      };

    //CRUD Facture Vente SUCCESS:
    case ADD_FACTUREVENTE_SUCCESS:
      return {
        ...state,
        factureVente: [...state.factureVente, action.payload],
        errors: null,
      };
    case GET_FACTUREVENTE_SUCCESS:
      return {
        ...state,
        factureVente: action.payload,
        errors: null,
      };
    case UPDATE_FACTUREVENTE_SUCCESS:
      return {
        ...state,
        errors: null,
        factureVente: state.factureVente.map((el) => {
          if (el._id === action.payload._id) return action.payload;
          return el;
        }),
      };
    case DELETE_FACTUREVENTE_SUCCESS:
      return {
        ...state,
        errors: null,
        factureVente: state.factureVente.filter(
          (el) => el._id !== action.payload._id
        ),
      };

    //CRUD Ligne Reservation SUCCESS:
    case ADD_LIGNERESERVATION_SUCCESS:
      return {
        ...state,
        ligneReservation: [...state.ligneReservation, action.payload],
        errors: null,
      };
    case GET_LIGNERESERVATION_SUCCESS:
      return {
        ...state,
        ligneReservation: action.payload,
        errors: null,
      };
    case UPDATE_LIGNERESERVATION_SUCCESS:
      return {
        ...state,
        errors: null,
        ligneReservation: state.ligneReservation.map((el) => {
          if (el._id === action.payload._id) return action.payload;
          return el;
        }),
      };
    case DELETE_LIGNERESERVATION_SUCCESS:
      return {
        ...state,
        errors: null,
        ligneReservation: state.ligneReservation.filter(
          (el) => el._id !== action.payload._id
        ),
      };

    //CRUD Ligne Vente SUCCESS:
    case ADD_LIGNEVENTE_SUCCESS:
      return {
        ...state,
        ligneVente: [...state.ligneVente, action.payload],
        errors: null,
      };
    case GET_LIGNEVENTE_SUCCESS:
      return {
        ...state,
        ligneVente: action.payload,
        errors: null,
      };
    case UPDATE_LIGNEVENTE_SUCCESS:
      return {
        ...state,
        errors: null,
        ligneVente: state.ligneVente.map((el) => {
          if (el._id === action.payload._id) return action.payload;
          return el;
        }),
      };
    case DELETE_LIGNEVENTE_SUCCESS:
      return {
        ...state,
        errors: null,
        ligneVente: state.ligneVente.filter(
          (el) => el._id !== action.payload._id
        ),
      };
    //CRUD Reservation SUCCESS:
    case ADD_RESERVATION_SUCCESS:
      return {
        ...state,
        reservation: [...state.reservation, action.payload],
        errors: null,
      };
    case GET_RESERVATION_SUCCESS:
      return {
        ...state,
        reservation: action.payload,
        errors: null,
      };
    case UPDATE_RESERVATION_SUCCESS:
      return {
        ...state,
        errors: null,
        reservation: state.reservation.map((el) => {
          if (el._id === action.payload._id) return action.payload;
          return el;
        }),
      };
    case DELETE_RESERVATION_SUCCESS:
      return {
        ...state,
        errors: null,
        reservation: state.reservation.filter(
          (el) => el._id !== action.payload._id
        ),
      };

    //CRUD TVA SUCCESS:
    case ADD_TVA_SUCCESS:
      return {
        ...state,
        tva: [...state.tva, action.payload],
        errors: null,
      };
    case GET_TVA_SUCCESS:
      return {
        ...state,
        tva: action.payload,
        errors: null,
      };
    case UPDATE_TVA_SUCCESS:
      return {
        ...state,
        errors: null,
        tva: state.tva.map((el) => {
          if (el._id === action.payload._id) return action.payload;
          return el;
        }),
      };
    case DELETE_TVA_SUCCESS:
      return {
        ...state,
        errors: null,
        tva: state.tva.filter((el) => el._id !== action.payload._id),
      };
    case GET_PRODUIT_VENTE_SUCCESS:
      return {
        ...state,
        errors: null,
        produit: action.payload,
      };
    case VALIDATE_COMMANDVENTE_SUCCESS:
      return {
        ...state,
        errors: null,
        commandeVente: state.commandeVente.map((el) => {
          if (el._id === action.payload._id) return action.payload;
          return el;
        }),
      };

    // CRUD FAILED
    case ADD_CLIENT_FAILED:
    case GET_CLIENT_FAILED:
    case UPDATE_CLIENT_FAILED:
    case DELETE_CLIENT_FAILED:
    case ADD_COMMANDEVENTE_FAILED:
    case GET_COMMANDEVENTE_FAILED:
    case UPDATE_COMMANDEVENTE_FAILED:
    case DELETE_COMMANDEVENTE_FAILED:
    case ADD_CONTACT_FAILED:
    case GET_CONTACT_FAILED:
    case UPDATE_CONTACT_FAILED:
    case DELETE_CONTACT_FAILED:
    case ADD_ENTREPRISE_FAILED:
    case GET_ENTREPRISE_FAILED:
    case UPDATE_ENTREPRISE_FAILED:
    case DELETE_ENTREPRISE_FAILED:
    case ADD_FACTUREVENTE_FAILED:
    case GET_FACTUREVENTE_FAILED:
    case UPDATE_FACTUREVENTE_FAILED:
    case DELETE_FACTUREVENTE_FAILED:
    case ADD_LIGNERESERVATION_FAILED:
    case GET_LIGNERESERVATION_FAILED:
    case UPDATE_LIGNERESERVATION_FAILED:
    case DELETE_LIGNERESERVATION_FAILED:
    case ADD_LIGNEVENTE_FAILED:
    case GET_LIGNEVENTE_FAILED:
    case UPDATE_LIGNEVENTE_FAILED:
    case DELETE_LIGNEVENTE_FAILED:
    case ADD_RESERVATION_FAILED:
    case GET_RESERVATION_FAILED:
    case UPDATE_RESERVATION_FAILED:
    case DELETE_RESERVATION_FAILED:
    case ADD_TVA_FAILED:
    case GET_TVA_FAILED:
    case UPDATE_TVA_FAILED:
    case DELETE_TVA_FAILED:
    case GET_PRODUIT_VENTE_FAILED:
    case VALIDATE_COMMANDVENTE_FAILED:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default venteReducer;
