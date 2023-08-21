// app.selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState  } from '../reducer/app.reducers'; // Adjust the path based on your file structure

export const selectAppState = createFeatureSelector<AppState>('app');

export const selectTitle = createSelector(
  selectAppState,
  (state: AppState) => state.title
);
