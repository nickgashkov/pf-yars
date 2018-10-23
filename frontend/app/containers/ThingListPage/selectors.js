import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectThingListPageDomain = state => state.get('ThingListPage', initialState);

const makeSelectThingsLoading = () =>
  createSelector(selectThingListPageDomain, state => state.get('loading'));

const makeSelectThingsError = () =>
  createSelector(selectThingListPageDomain, state => state.get('error'));

const makeSelectThingsSuccess = () =>
  createSelector(selectThingListPageDomain, state => state.get('things'));

export {
  makeSelectThingsLoading,
  makeSelectThingsError,
  makeSelectThingsSuccess,
};

export default selectThingListPageDomain;
