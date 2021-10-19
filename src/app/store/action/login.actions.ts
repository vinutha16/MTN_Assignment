import { createAction, props } from '@ngrx/store';
import { User } from '../../models/users';

export const loginPage= createAction(
    '[Login Api] API Success',
   // (user:User)=>({user})
    props<{user:User}>()
);

export const loginsuccess = createAction(
    '[Login success] Login User Success',
    props<{message:string}>()
);

export const logout = createAction(
    '[Auth] logout',
    props<{user:User}>()
    
    );

export const logoutComplete = createAction('[Auth] logoutComplete');

