import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { Store } from "tough-cookie";

import rootReducer from "./root-reducer";

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;