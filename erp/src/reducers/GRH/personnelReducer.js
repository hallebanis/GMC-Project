import {
  LOAD_PERSONNEL_SUCCESS,
  LOAD_PERSONNEL_FAILED,
  ADD_PERSONNEL_SUCCESS,
  ADD_PERSONNEL_FAILED,
  DELETE_PERSONNEL_SUCCESS,
  DELETE_PERSONNEL_FAILED,
  EDIT_PERSONNEL_SUCCESS,
  EDIT_PERSONNEL_FAILED
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
        personnel: state.personnel.map((el) =>{
          if (el._id===action.payload){
            return action.payload
          }
          return el
        } ),
      }; 
      case EDIT_PERSONNEL_FAILED:
        return {
          ...state,
          personnel: state.personnel,
          errors:action.payload
        }
    default:
      return state;
  }
};

export default personnelReducer;
