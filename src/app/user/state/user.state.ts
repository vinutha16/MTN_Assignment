import { User } from "../model/user.model";

export interface UserState {
    user: User ;
  }
  
  export const initialState: UserState = {
    user: null,
  };