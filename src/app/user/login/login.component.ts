import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/app.state';
import { User } from '../model/user.model';
import { loginStart } from '../state/user.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  submitted = false;
  user: User = new User();
  loginForm: FormGroup;
  error: any;
  constructor(private fb: FormBuilder, private store: Store<AppState>) {
    
  }

  ngOnInit() {
 
    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.email,
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.maxLength(20),
        ],
      ],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    else if(this.loginForm.valid) {
      const email = this.loginForm.value.username;
      const password = this.loginForm.value.password;
      this.store.dispatch(loginStart({ email, password }));
      }
  }
}
