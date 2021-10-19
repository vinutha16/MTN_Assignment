import { createAction, props } from "@ngrx/store";
import { User } from "../model/user.model";

export const LOGIN_USER="[login page] user login";
export const LOGIN_SUCCESS="[login page] login success";
export const LOGIN_FAILED="[login page] login failed";
export const LOGOUT_ACTION = '[login page] logout';
export const GET_USER ="[home page] get user";
export const GET_USER_SUCCESS ="[home page] get user success";

export const loginStart = createAction(
    LOGIN_USER,
    props<{  email:string;password:string }>()
  );
  export const loginSuccess = createAction(
    LOGIN_SUCCESS, props<{ user}>()
  );

  export const getUser = createAction(GET_USER);
  export const getUserSuccess = createAction(GET_USER_SUCCESS,props<{user:User}>());

  export const autoLogout = createAction(LOGOUT_ACTION);