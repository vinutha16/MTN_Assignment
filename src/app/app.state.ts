import { UserReducer } from "./user/state/user.reducer";
import { USER_STATE_NAME } from "./user/state/user.selector";
import { UserState } from "./user/state/user.state";

export interface AppState {
    [USER_STATE_NAME]: UserState;
  }
  
  export const appReducer = {
    [USER_STATE_NAME]: UserReducer
  };