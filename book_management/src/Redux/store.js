import { applyMiddleware, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { bookReducer } from "./Books/reducer";

export const store = legacy_createStore( bookReducer , applyMiddleware(thunk))