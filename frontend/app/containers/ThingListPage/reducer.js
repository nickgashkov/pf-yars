/*
 *
 * ThingListPage reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_THINGS, LOAD_THINGS_ERROR, LOAD_THINGS_SUCCESS } from './constants';

export const initialState = fromJS(
  {
    loading: false,
    error: null,
    things: [],
  }
);

function ThingListPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_THINGS:
      return state
        .set('loading', true)
        .set('error', null)
        .set('things', []);
    case LOAD_THINGS_ERROR:
      return state
        .set('loading', false)
        .set('error', action.payload.error)
        .set('things', []);
    case LOAD_THINGS_SUCCESS:
      return state
        .set('loading', false)
        .set('error', null)
        .set('things', action.payload.things);
    default:
      return state;
  }
}

export default ThingListPageReducer;
