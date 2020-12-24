import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
} from "../../actions/authentification/types";
let initSate = {
  token: localStorage.getItem("token"),
  user: null,
  isAuth: false,
  errors: null,
};
const authReducer = (state = initSate, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.token);
      return {
        ...state,
        token: action.payload.token,
        isAuth: true,
        errors: null,
      };
    case LOGIN_FAILED:
      return {
        ...state,
        isAuth: false,
        errors: action.payload,
      };
    default:
      return state;
  }
};

export default authReducer;
