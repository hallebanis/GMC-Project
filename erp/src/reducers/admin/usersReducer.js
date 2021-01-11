import {
  ADD_USER_FAILED,
  ADD_USER_SUCCESS,
  DELETE_USER_FAILED,
  DELETE_USER_SUCCESS,
  LOAD_ROLES_FAILED,
  LOAD_ROLES_SUCCESS,
  LOAD_USERS_FAILED,
  LOAD_USERS_SUCCESS,
  MODIFY_USER_FAILED,
  MODIFY_USER_SUCCESS,
} from "../../actions/admin/types";

let initState = {
  users: [
    {
      login: "",
      password: "",
      personnelId: {},
      role: {},
    },
  ],
  errors: null,
};

const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case LOAD_USERS_SUCCESS:
      return {
        ...state,
        users: action.payload,
        errors: null,
      };
    case LOAD_USERS_FAILED:
      return {
        ...state,
        users: [],
        errors: action.payload,
      };
    case MODIFY_USER_SUCCESS:
      return {
        ...state,
        users: state.users.map((elm) => {
          if (elm._id === action.payload._id) return action.payload;
          else return elm;
        }),
        errors: null,
      };
    case LOAD_ROLES_SUCCESS:
      return {
        ...state,
        errors: null,
        roles: action.payload,
      };
    case LOAD_ROLES_FAILED:
      return {
        ...state,
        roles: [],
        errors: action.payload,
      };
    case DELETE_USER_SUCCESS:
      return {
        ...state,
        users: state.users.filter((elm) => elm._id !== action.payload._id),
        errors: null,
      };
    case ADD_USER_FAILED:
    case DELETE_USER_FAILED:
    case MODIFY_USER_FAILED:
      return {
        ...state,
        errors: action.payload,
      };
    case ADD_USER_SUCCESS:
      return {
        ...state,
        users: [...state.users, action.payload],
        errors: null,
      };
    default:
      return state;
  }
};

export default usersReducer;
