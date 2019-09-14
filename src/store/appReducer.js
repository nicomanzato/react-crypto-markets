import { combineReducers } from 'redux';

import { CryptocurrencyReducer } from './cryptocurrency/cryptocurrency.reducer';
import { UIReducer } from './ui/ui.reducer';

const AppReducer = combineReducers({
  CryptocurrencyReducer,
  UIReducer,
});

export default AppReducer;
