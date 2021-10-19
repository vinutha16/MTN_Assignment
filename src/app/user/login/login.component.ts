import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.state';
import { loginStart } from '../state/user.actions';

const PASSWORD_MIN_LENGH = 6;
const PASSWORD_MAX_LENGH = 20;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  isSubmitted: boolean = false;
  errorMessage: string = '';
  passwordMinLength: number = PASSWORD_MIN_LENGH;
  passwordMaxLength: number = PASSWORD_MAX_LENGH;
 // @ViewChild('username') username!: ElementRef<HTMLInputElement>;
  
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.loginForm= new FormGroup({
      username : new FormControl('',[Validators.required,Validators.email]),
      password : new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(20)])
    })
  }
  onLogin(){
    this.isSubmitted=true;
    if (this.loginForm.valid) {
    const email = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.store.dispatch(loginStart({ email, password }));
    }
  }
}
