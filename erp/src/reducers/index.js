import { combineReducers } from "redux";
import usersReducer from "./admin/usersReducer";
import authReducer from "./authentification/authReducer";
import personnelReducer from "./GRH/personnelReducer";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  personnel: personnelReducer,
});
