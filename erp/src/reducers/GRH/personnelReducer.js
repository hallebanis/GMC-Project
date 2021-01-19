import {
  LOAD_PERSONNEL_SUCCESS,
  LOAD_PERSONNEL_FAILED,
  ADD_PERSONNEL_SUCCESS,
  ADD_PERSONNEL_FAILED,
  DELETE_PERSONNEL_SUCCESS,
  DELETE_PERSONNEL_FAILED,
  EDIT_PERSONNEL_SUCCESS,
  EDIT_PERSONNEL_FAILED,
  ADD_CONTRAT_FAILED,
  EDIT_CONTRAT_FAILED,
  EDIT_CONTRAT_SUCCESS,
  DELETE_CONTRAT_FAILED,
  ADD_CONTRAT_SUCCESS,
  DELETE_CONTRAT_SUCCESS,
  LOAD_CONTRAT_FAILED,
  LOAD_CONTRAT_SUCCESS,
  EDIT_SERVICE_FAILED,
  EDIT_SERVICE_SUCCESS,
  DELETE_SERVICE_FAILED,
  DELETE_SERVICE_SUCCESS,
  ADD_SERVICE_FAILED,
  ADD_SERVICE_SUCCESS,
  LOAD_SERVICE_FAILED,
  LOAD_SERVICE_SUCCESS,
  ADD_EMBAUCHE_FAILED,
  LOAD_EMBAUCHE_SUCCESS,
  DELETE_EMBAUCHE_SUCCESS,
  DELETE_EMBAUCHE_FAILED,
  LOAD_EMBAUCHE_FAILED,
  ADD_EMBAUCHE_SUCCESS,
  LOAD_AVANCE_FAILED,
  LOAD_AVANCE_SUCCESS,
  ADD_AVANCE_FAILED,
  ADD_AVANCE_SUCCESS,
} from "../../actions/GRH/types";

const initState = {
  service: [],
  contrat: [],
  personnel: [],
  avance: [],
  errors: null,
};

const personnelReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_PERSONNEL_SUCCESS:
      return {
        ...state,
        personnel: action.payload,
        errors: null,
      };
    case LOAD_PERSONNEL_FAILED:
      return {
        ...state,
        personnel: [],
        errors: null,
      };
    case ADD_PERSONNEL_SUCCESS:
      return {
        ...state,
        personnel: [...state.personnel, action.payload],
        errros: null,
      };
    case ADD_PERSONNEL_FAILED:
      return {
        ...state,
        personnel: state.personnel,
        errors: action.payload,
      };
    case DELETE_PERSONNEL_SUCCESS:
      return {
        ...state,
        personnel: state.personnel.filter(
          (el) => el._id !== action.payload._id
        ),
        errors: null,
      };
    case DELETE_PERSONNEL_FAILED:
      return {
        ...state,
        personnel: state.personnel,
        errors: action.payload,
      };
    case EDIT_PERSONNEL_SUCCESS:
      return {
        ...state,
        personnel: state.personnel.map((el) => {
          if (el._id === action.payload._id) {
            return action.payload;
          }
          return el;
        }),
      };
    case EDIT_PERSONNEL_FAILED:
      return {
        ...state,
        personnel: state.personnel,
        errors: action.payload,
      };
    case LOAD_CONTRAT_SUCCESS:
      return {
        ...state,
        contrat: action.payload,
        errors: null,
      };
    case LOAD_CONTRAT_FAILED:
      return {
        ...state,
        contrat: [],
        errros: action.payload,
      };
    case ADD_CONTRAT_SUCCESS:
      return {
        ...state,
        contrat: [...state.contrat, action.payload],
        errors: null,
      };
    case ADD_CONTRAT_FAILED:
      return {
        ...state,
        contrat: state.contrat,
        errros: action.payload,
      };
    case DELETE_CONTRAT_SUCCESS:
      return {
        ...state,
        contrat: state.contrat.filter((el) => el._id !== action.payload._id),
        errors: null,
      };
    case DELETE_CONTRAT_FAILED:
      return {
        ...state,
        contrat: state.contrat,
        errors: action.payload,
      };
    case EDIT_CONTRAT_SUCCESS:
      return {
        ...state,
        contrat: state.contrat.map((el) => {
          if (el._id === action.payload._id) {
            return action.payload;
          }
          return el;
        }),
        errros: null,
      };
    case EDIT_CONTRAT_FAILED:
      return {
        ...state,
        contrat: state.contrat,
        errors: action.payload,
      };
    case LOAD_SERVICE_SUCCESS:
      return {
        ...state,
        service: action.payload,
        errors: null,
      };
    case LOAD_SERVICE_FAILED:
      return {
        ...state,
        service: [],
        errros: action.payload,
      };
    case ADD_SERVICE_SUCCESS:
      return {
        ...state,
        service: [...state.service, action.payload],
        errors: null,
      };
    case ADD_SERVICE_FAILED:
      return {
        ...state,
        service: state.service,
        errros: action.payload,
      };
    case DELETE_SERVICE_SUCCESS:
      return {
        ...state,
        service: state.service.filter((el) => el._id !== action.payload._id),
        errors: null,
      };
    case DELETE_SERVICE_FAILED:
      return {
        ...state,
        service: state.service,
        errors: action.payload,
      };
    case EDIT_SERVICE_SUCCESS:
      return {
        ...state,
        service: state.service.map((el) => {
          if (el._id === action.payload._id) {
            return action.payload;
          }
          return el;
        }),
        errros: null,
      };
    case EDIT_SERVICE_FAILED:
      return {
        ...state,
        service: state.service,
        errors: action.payload,
      };
    case ADD_EMBAUCHE_SUCCESS:
      return {
        ...state,
        embauche: [...state.embauche, action.payload],
        errors: null,
      };
    case ADD_EMBAUCHE_FAILED:
      return {
        ...state,
        embauche: state.embauche,
        errors: action.payload,
      };
    case LOAD_EMBAUCHE_SUCCESS:
      return {
        ...state,
        embauche: action.payload,
        errors: null,
      };
    case LOAD_EMBAUCHE_FAILED:
      return {
        ...state,
        embauche: state.embauche,
        errors: action.payload,
      };
    case DELETE_EMBAUCHE_SUCCESS:
      return {
        ...state,
        embauche: state.embauche.filter((el) => el._id !== action.payload._id),
        errors: null,
      };
    case DELETE_EMBAUCHE_FAILED:
      return {
        ...state,
        embauche: state.embauche,
        errors: action.payload,
      };
    case ADD_AVANCE_SUCCESS:
      return {
        ...state,
        avance: [...state.avance, action.payload],
        errors: null,
      };
    case ADD_AVANCE_FAILED:
      return {
        ...state,
        avance: state.avance,
        errors: action.payload,
      };
    case LOAD_AVANCE_SUCCESS:
      return {
        ...state,
        avance: action.payload,
        errors: null,
      };
    case LOAD_AVANCE_FAILED:
      return {
        ...state,
        avance: state.avance,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default personnelReducer;
