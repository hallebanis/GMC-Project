import {
  ADD_CLIENT_FAILED,
  ADD_CLIENT_SUCCESS,
  DELETE_CLIENT_FAILED,
  DELETE_CLIENT_SUCCESS,
  GET_CLIENT_FAILED,
  GET_CLIENT_SUCCESS,
  UPDATE_CLIENT_FAILED,
  UPDATE_CLIENT_SUCCESS,
} from "../../actions/GV/types";

const initState = {
  client: [],
  commandeVente: [],
  errors: null,
};
const venteReducer = (state = initState, action) => {
  switch (action.type) {
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
          errors:null,
          client: state.client.filter(el=>el._id!==action.payload._id)
        };
    case ADD_CLIENT_FAILED:
    case GET_CLIENT_FAILED:
    case UPDATE_CLIENT_FAILED:
    case DELETE_CLIENT_FAILED:
      return {
        ...state,
        errors: action.payload,
      };
    
   
     

    default:
      return state;
  }
};

export default venteReducer;
