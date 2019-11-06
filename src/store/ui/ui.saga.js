import { all, put, takeLatest, select, getContext } from 'redux-saga/effects';

import * as UiActions from '../ui/ui.actions';

import { getCryptocurrencies, getCryptocurrency } from '../../services/cryptocurrency.service';

import { constants } from '../../constants/constants';

export function* moveToPage(action) {
  const history = yield getContext('routerHistory');
  history.push(action.payload);
}

function* watchMoveToPage() {
  yield takeLatest(UiActions.MOVE_TO_PAGE, moveToPage);
}

export function* UiSaga() {
  yield all([watchMoveToPage()]);
}
