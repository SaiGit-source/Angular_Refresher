import { isDevMode } from '@angular/core';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer,
} from '@ngrx/store';
import { ZipCodeReducer, zipCodesFeatureKey, ZipCodeState } from './zip-codes.reducer';
import {
  currentConditionsFeatureKey,
  currentConditionsReducer,
  CurrentConditionsState
} from './current-conditions-reducer.reducer';

export interface State {
  [zipCodesFeatureKey]: ZipCodeState;
  [currentConditionsFeatureKey]: CurrentConditionsState;
}

export const reducers: ActionReducerMap<State> = {
  [zipCodesFeatureKey]: ZipCodeReducer,
  [currentConditionsFeatureKey]: currentConditionsReducer,
};

export interface State {
  [zipCodesFeatureKey]: ZipCodeState;
  [currentConditionsFeatureKey]: CurrentConditionsState;
}

export const metaReducers: MetaReducer<State>[] = isDevMode() ? [] : [];
