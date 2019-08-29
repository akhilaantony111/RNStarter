import { combineReducers } from "redux";
import * as TYPES from '../utils/Constants';
import login from './login';
import network from './network';

const AppReducer = combineReducers({ //Combining all individual reducers
    login,
    network
});
const rootReducer = (state, action) => {
  if (action.type === TYPES.CONSTANTS.LOGOUT_SUCCESS) {
    state = undefined; //Clearing state while logout.
  }
  return AppReducer(state, action);
}

export default rootReducer;