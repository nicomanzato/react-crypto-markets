import { combineReducers } from 'redux';

import { CryptocurrencyReducer } from './cryptocurrency/cryptocurrency.reducer';
import { UIReducer } from './ui/ui.reducer';
import { connectRouter } from 'connected-react-router';

const createRootReducer = (history) => combineReducers({
  router: connectRouter(history),
  CryptocurrencyReducer,
  UIReducer
});

export default createRootReducer;
