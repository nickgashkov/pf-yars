import {LOAD_THINGS, LOAD_THINGS_ERROR, LOAD_THINGS_SUCCESS} from './constants';

export function loadThings() {
  return {
    type: LOAD_THINGS,
    payload: {},
  };
}

export function loadThingsSuccess(things) {
  return {
    type: LOAD_THINGS_SUCCESS,
    payload: {
      things: things
    }
  };
}

export function loadThingsError(error) {
  return {
    type: LOAD_THINGS_ERROR,
    payload: {
      error: error
    }
  };
}
