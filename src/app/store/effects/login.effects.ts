import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType, createEffect } from '@ngrx/effects';
import {map, exhaustMap, catchError, tap, mergeMap, switchMap,concatMap, } from 'rxjs/operators';
import { of, from, Observable } from 'rxjs';
import {loginPage} from '../../store/action/login.actions'

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions,private router: Router) {}

  loginPage$ = createEffect(() =>
    this.actions$.pipe(
        ofType(loginPage),
      
    )
  );
}
