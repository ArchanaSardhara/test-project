import { call, put, takeLatest, all } from 'redux-saga/effects';
import { updatePlayers } from './action';
import request from './request';
import { PLAYERS_LIST } from './type';

export function* loadPlayerList() {
  const requestURL = `http://localhost:5000/players`;
  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json, application/xml, text/plain, text/html, *.*',
      // 'Content-Type': 'application/json; charset=utf-8',
    },
    // body: JSON.stringify({ tagIds: action.tagIds }),
  };
  const response = yield call(request, requestURL, options);
  yield put(updatePlayers(response));
}

export default function* playerWatch() {
  // Watches for PLAYERS_LIST actions and calls getRepos when one comes in.
  // By using `takeLatest` only the result of the latest API call is applied.
  // It returns task descriptor (just like fork) so we can continue execution
  // It will be cancelled automatically on component unmount
  yield all([
    takeLatest(PLAYERS_LIST, loadPlayerList),
  ]);
}