import { all, put, takeLatest } from 'redux-saga/effects';
import $ from 'jquery';
import { push } from 'connected-react-router';

import * as UiActions from '../ui/ui.actions';

export function* moveToPage(action) {
  yield put(push(action.payload));
  $('html, body').animate({ scrollTop: 0 });
}

function* watchMoveToPage() {
  yield takeLatest(UiActions.MOVE_TO_PAGE, moveToPage);
}

export function* UiSaga() {
  yield all([watchMoveToPage()]);
}
