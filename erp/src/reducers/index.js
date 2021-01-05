import { combineReducers } from "redux";
import usersReducer from "./admin/usersReducer";
import authReducer from "./authentification/authReducer";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
});
