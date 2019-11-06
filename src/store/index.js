import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import reducer from './appReducer';
import sagas from './appSagas';

//const sagaMiddleware = createSagaMiddleware();
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//export const store = createStore(appReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
//sagaMiddleware.run(appSagas);

export default (initialState, context = {}) => {
  const sagaMiddleware = createSagaMiddleware({ context });

  const enhancers = [applyMiddleware(sagaMiddleware)];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer, initialState, composeEnhancers(...enhancers));
  let sagaTask = sagaMiddleware.run(sagas, context);
  return store;
};
