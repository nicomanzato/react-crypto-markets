import { applyMiddleware, createStore, compose } from 'redux';
import { createBrowserHistory } from 'history'
import createSagaMiddleware from 'redux-saga';
import reducer from './appReducer';
import sagas from './appSagas';
import { routerMiddleware } from 'connected-react-router'

export const history = createBrowserHistory();

//const sagaMiddleware = createSagaMiddleware();
//const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//export const store = createStore(appReducer, composeEnhancers(applyMiddleware(sagaMiddleware)));
//sagaMiddleware.run(appSagas);

export default (initialState, context = {}) => {
  const sagaMiddleware = createSagaMiddleware({ context });

  const enhancers = [applyMiddleware(sagaMiddleware, routerMiddleware(history))];

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(reducer(history), initialState, composeEnhancers(...enhancers));
  sagaMiddleware.run(sagas, context);
  return store;
};
