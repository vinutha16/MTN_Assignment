import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromLogin from '../reducer/login.reducer';

export const selectCustomerState = createFeatureSelector<fromLogin.UserState>(
     fromLogin.loginFeatureKey,

    );
  export const selectCustomers = createSelector(
    selectCustomerState,
    (state: fromLogin.UserState) => state.user
    
    );