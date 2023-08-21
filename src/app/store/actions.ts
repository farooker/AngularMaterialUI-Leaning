import { createAction, props } from '@ngrx/store';

// Define actions using createAction
export const incrementCounter = createAction('[Counter] Increment');
export const setTitle = createAction('[Title] Set', props<{ title: string }>());
export const addBreadcrumb = createAction('[Breadcrumb] Add', props<{ breadcrumb: [] }>());
