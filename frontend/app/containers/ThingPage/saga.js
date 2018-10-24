import { takeLatest, call, put, select } from 'redux-saga/effects';
import request from "../../utils/request";
import {loadThingError, loadThingSuccess} from "./actions";
import {LOAD_THING} from "./constants";
import {makeSelectThingId} from "./selectors";

export function* getThing(action) {
  const id = action.payload.id;
  const requestURL = `/api/things/things/${id}/`;

  try {
    const thing = yield call(request, requestURL);
    yield put(loadThingSuccess(thing));
  } catch (err) {
    yield put(loadThingError(err));
  }
}


export default function* thingData() {
  yield takeLatest(LOAD_THING, getThing);
}
