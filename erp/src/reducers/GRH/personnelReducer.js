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
} from "../../actions/GRH/types";

const initState = {
  contrat: [],
  personnel: [],
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
          if (el._id === action.payload) {
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
        contrat: state.contrat.map((el) => el._id === action.payload),
        errros: null,
      };
    case EDIT_CONTRAT_FAILED:
      return {
        ...state,
        contrat: state.contrat,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default personnelReducer;
