import { combineReducers } from "redux";
import authReducer from "./authentification/authReducer";

export default combineReducers({ auth: authReducer });
