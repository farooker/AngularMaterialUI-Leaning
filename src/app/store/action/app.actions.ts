// app.actions.ts
import { createAction } from '@ngrx/store';

export const SET = 'SET';

export const setTitle = createAction(SET, (value: string) => ({ value }));

