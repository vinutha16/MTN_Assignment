import { HttpClient, HttpClientModule } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Store } from '@ngrx/store';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { userService } from '../user.service';

import { LoginComponent } from './login.component';

let form = new FormGroup({
  username : new FormControl(''),
  password : new FormControl('')
})

describe('LoginComponent', () => {
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule
      ],
      providers: [
        userService,
        HttpClient,
        RouterTestingModule,
        provideMockStore({}),
      ],
      declarations: [LoginComponent],
    }).compileComponents();
    fixture = TestBed.createComponent(LoginComponent);
  }));

  it('created a form with username and password input and login button', () => {
    // const fixture = TestBed.createComponent(LoginComponent);
    const username = fixture.debugElement.nativeElement.querySelector('#username');
    const password = fixture.debugElement.nativeElement.querySelector('#password');
    const loginBtn = fixture.debugElement.nativeElement.querySelector('#login');
    expect(username).toBeDefined();
    expect(password).toBeDefined();
    expect(loginBtn).toBeDefined();
  });

  it('Display Username Error Msg when Username is blank', () => {
    form.get('username').setValue('');
    form.get('password').setValue('123456');

    const button = fixture.debugElement.nativeElement.querySelector('#login');
    button.click();
    fixture.detectChanges();

    const usernameErrorMsg = fixture.debugElement.nativeElement.querySelector('#username-error-msg');
    expect(usernameErrorMsg).toBeDefined();
    expect(usernameErrorMsg.innerHTML).toContain('Please enter username');
  });

  it('Display invalid username Error Msg when Username is invalid', () => {
    form.get('username').setValue('Vgmail.com');
    form.get('password').setValue('123456');

    const button = fixture.debugElement.nativeElement.querySelector('#login');
    button.click();
    fixture.detectChanges();

    const usernameErrorMsg = fixture.debugElement.nativeElement.querySelector('#username-error-msg1');
    expect(usernameErrorMsg).toBeDefined();
    expect(usernameErrorMsg.innerHTML).toContain('Please enter correct username');
  });

  it('Display Password Error Msg when Password is blank', () => {
    form.get('username').setValue('');
    form.get('password').setValue('');

    const button = fixture.debugElement.nativeElement.querySelector('#login');
    button.click();
    fixture.detectChanges();

    const passwordErrorMsg = fixture.debugElement.nativeElement.querySelector('#password-error-msg');
    expect(passwordErrorMsg).toBeDefined();
    expect(passwordErrorMsg.innerHTML).toContain('Please enter password');
  });

  it('Display Both Username & Password Error Msg when both field is blank', () => {
    form.get('username').setValue('Vgmail.com');
    form.get('password').setValue('123456');
    fixture.detectChanges();

    const button = fixture.debugElement.nativeElement.querySelector('#login');
    button.click();
    fixture.detectChanges();

    const usernameErrorMsg = fixture.debugElement.nativeElement.querySelector('#username-error-msg');
    const passwordErrorMsg = fixture.debugElement.nativeElement.querySelector('#password-error-msg');

    expect(usernameErrorMsg).toBeDefined();
    expect(usernameErrorMsg.innerHTML).toContain('Please enter username');

    expect(passwordErrorMsg).toBeDefined();
    expect(passwordErrorMsg.innerHTML).toContain('Please enter password');
  });

  it('Display Error Msg when password as more than maximum length criteria', () => {
    form.get('username').setValue('Vgmail.com');
    form.get('password').setValue('12345766164654646546464646646');

    const button = fixture.debugElement.nativeElement.querySelector('#login');
    button.click();
    fixture.detectChanges();

    const passwordErrorMsg = fixture.debugElement.nativeElement.querySelector('#password-error-msg2');

    expect(passwordErrorMsg).toBeDefined();
    expect(passwordErrorMsg.innerHTML).toContain('Should not have more than 20 characters');
  });

  it('Display Error Msg when password min length criteria is not meeting', () => {
    form.get('username').setValue('Vgmail.com');
    form.get('password').setValue('12345');

    const button = fixture.debugElement.nativeElement.querySelector('#login');
    button.click();
    fixture.detectChanges();

    const passwordErrorMsg = fixture.debugElement.nativeElement.querySelector('#password-error-msg1');

    expect(passwordErrorMsg).toBeDefined();
    expect(passwordErrorMsg.innerHTML).toContain('Please enter 6 characters Passowrd');
  });
});
