import { createStore } from "redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import rootReducer from "./reducers/rootReducer";

// const store = createStore(productReducer, composeWithDevTools());
// with combining multiple reducers into one rootReducer
const store = createStore(rootReducer, composeWithDevTools());

export default store;
