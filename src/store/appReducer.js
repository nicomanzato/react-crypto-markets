import { combineReducers } from 'redux';

import { CryptocurrencyReducer } from './cryptocurrency/cryptocurrency.reducer';

const AppReducer = combineReducers({
  CryptocurrencyReducer,
});

export default AppReducer;
