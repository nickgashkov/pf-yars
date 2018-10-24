import {LOAD_THING, LOAD_THING_ERROR, LOAD_THING_SUCCESS} from './constants';

export function loadThing(id) {
  return {
    type: LOAD_THING,
    payload: {'id': id},
  };
}

export function loadThingSuccess(item) {
  return {
    type: LOAD_THING_SUCCESS,
    payload: {
      item: item
    }
  };
}

export function loadThingError(error) {
  return {
    type: LOAD_THING_ERROR,
    payload: {
      error: error
    }
  };
}
