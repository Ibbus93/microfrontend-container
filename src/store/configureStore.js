import { createStore, applyMiddleware, compose } from 'redux';
import { createLogger } from 'redux-logger'

import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers';
import rootSaga from './sagas';

const configureStore = () => {
    const middlewares = [];
    const sagaMiddleware = createSagaMiddleware();
    const logger = createLogger({});

    middlewares.push(sagaMiddleware, logger);

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancers = composeEnhancers(applyMiddleware(...middlewares));

    const store = createStore(rootReducer, enhancers);
    sagaMiddleware.run(rootSaga);

    return store;
};

export default configureStore;
