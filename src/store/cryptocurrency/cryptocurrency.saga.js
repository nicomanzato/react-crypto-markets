import { all, put, takeLatest } from 'redux-saga/effects';

import * as CryptocurrencyActions from './cryptocurrency.actions';

import { getCryptocurrencies, getCryptocurrency } from '../../services/cryptocurrency.service';

export function* loadCryptocurrencies() {
  try {
    const data = yield getCryptocurrencies();
    yield put(CryptocurrencyActions.LoadCryptocurrenciesSuccess(data));
  } catch (er) {
    console.log(er);
    yield put(CryptocurrencyActions.LoadCryptocurrenciesFail(er));
  }
}

function* watchLoadCryptocurrencies() {
  yield takeLatest(CryptocurrencyActions.LOAD_CRYPTOCURRENCIES, loadCryptocurrencies);
}

export function* loadCryptocurrencyDetails(action) {
  try {
    const data = yield getCryptocurrency(action.payload);
    yield put(CryptocurrencyActions.LoadCryptocurrencyDetailsSuccess(data));
  } catch (er) {
    console.log(er);
    yield put(CryptocurrencyActions.LoadCryptocurrencyDetailsFail(er));
  }
}

function* watchLoadCryptocurrencyDetails() {
  yield takeLatest(CryptocurrencyActions.LOAD_CRYPTOCURRENCY_DETAILS, loadCryptocurrencyDetails);
}

export function* CryptocurrencySaga() {
  yield all([watchLoadCryptocurrencies(), watchLoadCryptocurrencyDetails()]);
}
