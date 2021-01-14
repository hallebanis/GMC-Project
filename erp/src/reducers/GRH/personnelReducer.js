import {
  LOAD_PERSONNEL_SUCCESS,
  LOAD_PERSONNEL_FAILED,
  ADD_PERSONNEL_SUCCESS,
  ADD_PERSONNEL_FAILED,
} from "../../actions/GRH/types";

const initState = {
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
    default:
      return state;
  }
};

export default personnelReducer;
