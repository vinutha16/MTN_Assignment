import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { autoLogout, loginStart, loginSuccess } from "./user.actions";
import { exhaustMap, map, catchError, tap, mergeMap } from 'rxjs/operators';
import { userService } from "../user.service";
import { User } from "../model/user.model";
import { Router } from "@angular/router";

@Injectable()
export class UserEffects {
    constructor(private action$:Actions,private userservice:userService,private router:Router){}

    login$ = createEffect(()=>{
        return this.action$.pipe(
            ofType(loginStart),
            exhaustMap((action)=>{
                console.log(action.email);
                console.log(action.password);
             return this.userservice.userLogin(action.email,action.password).pipe(map((user:User)=>{
                return loginSuccess({user});
             }))
        }));
    })
    loginRedirect$ = createEffect(
        () => {
          return this.action$.pipe(
            ofType(loginSuccess),
            tap((action) => {
                this.router.navigate(['/home']);
            })
          );
        },
        { dispatch: false }
      );
}