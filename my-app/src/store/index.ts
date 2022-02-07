import {combineReducers, createStore} from "redux"
import { applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";

import feedReducer from "./feed-reducer";

let reducers = combineReducers({
    feed : feedReducer
});

export const store = createStore(reducers, applyMiddleware(thunkMiddleware));

export type RootState = ReturnType<typeof reducers>
