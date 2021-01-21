import { ADD_COMMANDEVENTE_FAILED, ADD_COMMANDEVENTE_SUCCESS } from "../../actions/GV/types";

const initState = {
  facture: [],
  commandeVente:[],
  errors: null,
};

const achatReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_COMMANDEVENTE_SUCCESS:
      return {
        ...state,
        commandeVente: [...state.commandeVente, action.payload],
        errors:null
      };
      case ADD_COMMANDEVENTE_FAILED:
          return:{
              ...state,
              errors:action.payload
          }
    default:
      return state;
  }
};

export default achatReducer;
