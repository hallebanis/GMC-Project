import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  REGISTRATION_FAILED,
  REGISTRATION_SUCCESS,
  LOGOUT,
} from "../../actions/authentification/types";
let inState = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false,
  errors: null,
};
const authReducer = (state = inState, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        user: action.payload.user,
        isAuth: true,
        errors: null,
      };
    case REGISTRATION_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
        isAuth: true,
        errors: null,
      };
    case REGISTRATION_FAILED:
    case LOGIN_FAILED:
      return {
        ...state,
        user: null,
        isAuth: false,
        errors: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem("token");
      return {
        auth: { isAuth: false, user: null, errors: null },
      };
    default:
      return state;
  }
};

export default authReducer;
