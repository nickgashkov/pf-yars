/*
 *
 * ThingListPage reducer
 *
 */

import { fromJS } from 'immutable';
import { LOAD_THING, LOAD_THING_ERROR, LOAD_THING_SUCCESS } from './constants';

export const initialState = fromJS(
  {
    loading: false,
    error: null,
    id: null,
    item: {},
  }
);

function ThingListPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_THING:
      return state
        .set('loading', true)
        .set('error', null)
        .set('id', action.payload.id)
        .set('item', {});
    case LOAD_THING_ERROR:
      return state
        .set('loading', false)
        .set('error', action.payload.error)
        .set('id', null)
        .set('item', {});
    case LOAD_THING_SUCCESS:
      return state
        .set('loading', false)
        .set('error', null)
        .set('id', null)
        .set('item', action.payload.item);
    default:
      return state;
  }
}

export default ThingListPageReducer;
