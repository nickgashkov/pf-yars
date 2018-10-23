import { takeLatest, call, put } from 'redux-saga/effects';
import request from "../../utils/request";
import {loadThingsError, loadThingsSuccess} from "./actions";
import {LOAD_THINGS} from "./constants";

export function* getThings() {
  const requestURL = "http://localhost:8000/api/things/things/";

  try {
    const things = yield call(request, requestURL);
    yield put(loadThingsSuccess(things));
  } catch (err) {
    yield put(loadThingsError(err));
  }
}


export default function* thingsData() {
  yield takeLatest(LOAD_THINGS, getThings);
}
