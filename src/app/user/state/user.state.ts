import { User } from "../model/user.model";

export interface UserState {
    user: User | null;
  }
  
  export const initialState: UserState = {
    user: null,
  };