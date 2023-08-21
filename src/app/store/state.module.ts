// state.module.ts
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { appReducer } from './reducers';
import * as actions from './actions';
import * as selectors from './selectors';

@NgModule({
  imports: [
    StoreModule.forFeature('app', appReducer),
    // StoreModule.forFeature('counter', appReducer),
    EffectsModule.forFeature([]),
  ],
  exports: [StoreModule]
})
export class StateModule {}

export { actions, selectors };
