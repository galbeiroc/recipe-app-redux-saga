import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';

import { rootReducer } from './root-reducer';
// import rootSaga from './sagas';

const sagMiddleware = createSagaMiddleware();

const middleware = [sagMiddleware];

if (process.env.NODE_ENV === 'development') {
  middleware.push(logger);
}

const store = createStore(rootReducer, applyMiddleware(...middleware));

// sagMiddleware.run(rootSaga);

export default store;
