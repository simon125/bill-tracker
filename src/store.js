import { createStore, /*applyMiddleware, */ compose, combineReducers } from 'redux'

import dataReducer from './reducers/dataReducer';
import statsSettings from './reducers/statsSettingsReducer'

const initialState = {}

const combineReducer = combineReducers({
    state: dataReducer,
    statsSettings
})

export const store = createStore(
    combineReducer,
    initialState,
    compose(
        window.__REDUX_DEVTOOLS_EXTENSION__ &&
        window.__REDUX_DEVTOOLS_EXTENSION__()))