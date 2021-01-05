import {
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
    case MODIFY_USER_FAILED:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default usersReducer;
