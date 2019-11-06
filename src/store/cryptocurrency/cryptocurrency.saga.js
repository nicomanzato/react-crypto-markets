import { all, put, takeLatest } from 'redux-saga/effects';

import * as CryptocurrencyActions from './cryptocurrency.actions';
import * as UiActions from '../ui/ui.actions';

import { getCryptocurrencies, getCryptocurrency } from '../../services/cryptocurrency.service';

import { constants } from '../../constants/constants';

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

export function* loadCryptocurrenciesDetailsSuccess(action) {
  yield put(
    UiActions.MoveToPage(constants.ROUTES.CRYPTOCURRENCY_DETAIL.replace(':cryptocurrencyId', action.payload[0].symbol))
  );
}

function* watchLoadCryptocurrenciesDetailsSuccess() {
  yield takeLatest(CryptocurrencyActions.LOAD_CRYPTOCURRENCY_DETAILS_SUCCESS, loadCryptocurrenciesDetailsSuccess);
}

export function* CryptocurrencySaga() {
  yield all([watchLoadCryptocurrencies(), watchLoadCryptocurrencyDetails(), watchLoadCryptocurrenciesDetailsSuccess()]);
}
