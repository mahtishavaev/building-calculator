import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { reducer } from "./reducer";

const composedEnhancer = composeWithDevTools(applyMiddleware(thunk));
export const store = createStore(reducer, composedEnhancer);
