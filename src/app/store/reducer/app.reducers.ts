// app.reducers.ts
import { createReducer, on } from '@ngrx/store';
import { setTitle } from '../action/app.actions'

export interface AppState {
  title: string;
}

const initialState: AppState = {
  title: '',
};

export const appReducer = createReducer(
  initialState,
  on(setTitle, (state, { value }) => ({ ...state, title : value }))
);
