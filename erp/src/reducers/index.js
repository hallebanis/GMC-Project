import { combineReducers } from "redux";
import usersReducer from "./admin/usersReducer";
import authReducer from "./authentification/authReducer";
import achatReducer from "./GA/achatReducer";
import personnelReducer from "./GRH/personnelReducer";
import venteReducer from "./GV/venteReducer";

export default combineReducers({
  auth: authReducer,
  users: usersReducer,
  personnel: personnelReducer,
  vente: venteReducer,
  achat: achatReducer,
});
