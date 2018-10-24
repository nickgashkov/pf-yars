import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectThingPageDomain = state => state.get('ThingPage', initialState);

const makeSelectThingId = () =>
  createSelector(selectThingPageDomain, state => state.get('id'));

const makeSelectThingLoading = () =>
  createSelector(selectThingPageDomain, state => state.get('loading'));

const makeSelectThingError = () =>
  createSelector(selectThingPageDomain, state => state.get('error'));

const makeSelectThingSuccess = () =>
  createSelector(selectThingPageDomain, state => state.get('item'));

export {
  makeSelectThingId,
  makeSelectThingLoading,
  makeSelectThingError,
  makeSelectThingSuccess,
};

export default selectThingPageDomain;
