import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule,FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { StoreModule } from '@ngrx/store';
import { appReducer } from 'src/app/app.state';
import { userService } from '../user.service';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  const authenticationServiceApiSpy =
    jasmine.createSpyObj<userService>('userService', [
      'userLogin',
    ]);

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        RouterTestingModule,
        StoreModule.forRoot(appReducer, {}),
      ],
      providers: [
        {
          provide: userService,
          useValue: authenticationServiceApiSpy,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('component initial state', () => {
    expect(component.submitted).toBeFalsy();
    expect(component.loginForm).toBeDefined();
    expect(component.loginForm.invalid).toBeTruthy();
  });

  it('Form should be invalid', () => {
    const controls = component.f;
    controls.username.setValue('sample@ibm.com');
    controls.password.setValue('ibm@');
    component.onLogin();
    expect(component.loginForm.valid).toBeFalsy();
  });

  it('Display Both Username & Password Error Msg when both field is blank', () => {
    const controls = component.f;
    controls.username.setValue('');
    controls.password.setValue('');
    component.onLogin();
    fixture.detectChanges();

    const emailErrorMsg = fixture.debugElement.nativeElement.querySelector('.email-required');
    const passwordErrorMsg = fixture.debugElement.nativeElement.querySelector('.password-required');

    expect(emailErrorMsg).toBeDefined();
    expect(emailErrorMsg.innerHTML).toContain('Email is required');

    expect(passwordErrorMsg).toBeDefined();
    expect(passwordErrorMsg.innerHTML).toContain('Password is required');
  });

  it('Display Username Error Msg when Username is blank', () => {
    const controls = component.f;
    controls.username.setValue('');
    controls.password.setValue('123456');
    component.onLogin();
    fixture.detectChanges();

    const emailErrorMsg = fixture.debugElement.nativeElement.querySelector('.email-required');

    expect(emailErrorMsg).toBeDefined();
    expect(emailErrorMsg.innerHTML).toContain('Email is required');
  });

  it('Display Password Error Msg when Password is blank', () => {
    const controls = component.f;
    controls.username.setValue('vinutha@gmail.com');
    controls.password.setValue('');
    component.onLogin();
    fixture.detectChanges();

    const passwordErrorMsg = fixture.debugElement.nativeElement.querySelector('.password-required');

    expect(passwordErrorMsg).toBeDefined();
    expect(passwordErrorMsg.innerHTML).toContain('Password is required');
  });

  it('Should login with valid form', () => {
    const controls = component.f;
    controls.username.setValue('vinutha@ibm.com');
    controls.password.setValue('V8@1234');
    component.onLogin();
    expect(component.submitted).toEqual(true);
  });
});
