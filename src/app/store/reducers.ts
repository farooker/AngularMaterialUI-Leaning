import { createReducer, on } from '@ngrx/store';
import * as Action from './actions';
import { AppState } from './app-state';
// import { Breadcrumbs } from './app-state';
export const initialState: AppState = {
  counter: 0,
  title: 'ssssss',
  breadcrumbs: []
};

export const appReducer = createReducer(
  initialState,
  on(Action.incrementCounter, state => ({ ...state, counter: state.counter + 1 })),
  on(Action.setTitle, (state, { title }) => ({ ...state, title })),
  on(Action.addBreadcrumb, (state, { breadcrumb }) => ({ ...state, breadcrumbs: state.breadcrumbs = breadcrumb })
  )
);
