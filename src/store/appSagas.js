import { all } from 'redux-saga/effects';

import { CryptocurrencySaga } from './cryptocurrency/cryptocurrency.saga';

export default function* appSagas() {
  yield all([CryptocurrencySaga()]);
}
