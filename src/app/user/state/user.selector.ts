import { createFeatureSelector, createSelector } from "@ngrx/store";
import { UserState } from "./user.state";

export const USER_STATE_NAME = 'user';

const getAuthState = createFeatureSelector<UserState>(USER_STATE_NAME);

export const getUserName = createSelector(getAuthState, (state) => {
    debugger
    console.log(state.user);
  return state.user;
});