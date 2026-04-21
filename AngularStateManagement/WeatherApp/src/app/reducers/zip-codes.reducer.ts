import { createReducer, on } from '@ngrx/store';
import { ZipCodeActions } from '../actions/zip-code.actions';
import { createFeatureSelector } from '@ngrx/store';


export const zipCodesFeatureKey = 'zipCodes';

export interface State {}

export type ZipCodeState = string[];

export const initialState: State = {};

export const initialZipCodesState: ZipCodeState = [];

export const ZipCodeReducer = createReducer(
    initialZipCodesState,
    on(ZipCodeActions.addZipCode, (state: ZipCodeState, action: { zipcode: string }) => [...state, action.zipcode]),
    on(ZipCodeActions.removeZipCode, (state: ZipCodeState, action: { zipcode: string }) => state.filter(code => code !== action.zipcode)),
);

export const selectZipCodes = createFeatureSelector<ZipCodeState>(zipCodesFeatureKey);

