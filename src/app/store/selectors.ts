import { createSelector, createFeatureSelector } from '@ngrx/store';
import { AppState } from './app-state'; // Import your AppState interface

// Create feature selector for your module
export const selectAppState = createFeatureSelector<AppState>('app');

// Create selectors
export const selectCounter = createSelector(selectAppState, state => state.counter);
export const selectTitle = createSelector(selectAppState, state => state.title);
export const selectBreadcrumbs = createSelector(selectAppState, state => state.breadcrumbs);
