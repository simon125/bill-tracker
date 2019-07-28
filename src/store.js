import {
  createStore,
  /*applyMiddleware, */ compose,
  combineReducers
} from "redux";

import dataReducer from "./reducers/dataReducer";
import statsSettings from "./reducers/statsSettingsReducer";
import auth from "./reducers/auth";

const initialState = {};

const combineReducer = combineReducers({
  state: dataReducer,
  statsSettings,
  auth
});

export const store = createStore(
  combineReducer,
  initialState,
  compose()
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
