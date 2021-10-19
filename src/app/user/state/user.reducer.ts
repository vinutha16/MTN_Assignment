import { createReducer, on } from "@ngrx/store";
import { autoLogout, loginSuccess } from "./user.actions";
import { initialState } from "./user.state";

const userReducer = createReducer( initialState,
    on(loginSuccess, (state, action) => {
      return {
          
        ...state,
        user: action.user,
      };
    }),
      on(autoLogout, (state) => {
        return {
          ...state,
          user: null,
        };
      })
    );
    

export function UserReducer(state, action) {
    return userReducer(state, action);
  }