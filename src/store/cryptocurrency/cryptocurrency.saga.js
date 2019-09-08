import { all, put, takeLatest } from 'redux-saga/effects';

import { LOAD_CRYPTOCURRENCIES, LoadCryptocurrenciesSuccess, LoadCryptocurrenciesFail } from './cryptocurrency.actions';

import { getCryptocurrencies } from '../../services/cryptocurrency.service';

export function* loadCryptocurrencies() {
  try {
    const data = yield getCryptocurrencies();
    yield put(LoadCryptocurrenciesSuccess(data));
  } catch (er) {
    console.log(er);
    yield put(LoadCryptocurrenciesFail(er));
  }
}

function* watchLoadCryptocurrencies() {
  yield takeLatest(LOAD_CRYPTOCURRENCIES, loadCryptocurrencies);
}

export function* CryptocurrencySaga() {
  yield all([watchLoadCryptocurrencies()]);
}
