import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import rootReducer from './root-reducer';
import createSagaMiddleware from 'redux-saga';

import { fetchCollectionsStart } from "./shop/shop.saga";

const sagaMiddleWare = createSagaMiddleware();

const middlewares = [sagaMiddleWare];

if (process.env.NODE_ENV === 'development') {
    middlewares.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleWare.run(fetchCollectionsStart)

const persistor = persistStore(store);

export {store, persistor};

