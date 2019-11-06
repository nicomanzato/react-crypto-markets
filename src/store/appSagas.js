import { all, fork } from 'redux-saga/effects';

import { CryptocurrencySaga } from './cryptocurrency/cryptocurrency.saga';
import { UiSaga } from './ui/ui.saga';

const sagas = [CryptocurrencySaga, UiSaga];

export default function* appSagas(context = {}) {
  yield all(sagas.map(saga => fork(saga, context)));
}
