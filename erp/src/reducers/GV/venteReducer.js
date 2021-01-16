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
    case ADD_CLIENT_FAILED:
      return {
        ...state,
        client: state.client,
        errors: action.payload,
      };
    case GET_CLIENT_SUCCESS:
      return {
        ...state,
        client: action.payload,
        errors: null,
      };
    case GET_CLIENT_FAILED:
      return {
        ...state,
        client: state.client,
        errors: action.payload,
      };
    case UPDATE_CLIENT_SUCCESS:
      return {
        ...state,
      };
    case UPDATE_CLIENT_FAILED:
      return {
        ...state,
        client: state.client,
        errors: action.payload,
      };
    case DELETE_CLIENT_SUCCESS:
      return {
        ...state,
      };
    case DELETE_CLIENT_FAILED:
      return {
        ...state,
        client: state.client,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default venteReducer;
