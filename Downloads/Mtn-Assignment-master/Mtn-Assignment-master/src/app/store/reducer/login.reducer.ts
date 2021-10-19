import { Action, createReducer, on } from '@ngrx/store';
import * as Userlogins from '../action/login.actions'
import { User } from '../../models/users';
import { state } from '@angular/animations';


export const loginFeatureKey = 'login';

export interface UserState {
  user:User,
  error:any
}
export interface logoutsate {
  logout:User,
  error:any
}
export const initialState: UserState = {
  user:{
    email:null,
    password:null
  },
  error:null
};


export const userreducer = createReducer(
  initialState,
  on(Userlogins.loginPage, (state, action)=>{
    return {
      ...state,
      user:action.user,
      error:null  
    };
  })
  
  );
  export const logoutreducer = createReducer(
    
    on(Userlogins.logout, (state, action)=>{
      if (action.type === Userlogins.logout) {
        state = undefined;
      }
  
    //  return userreducer(state, action);
     
    })
    
    );


  export function reducers(state: UserState | undefined, action: Action): any {
     return userreducer(state, action);
   }
