import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports:[ReactiveFormsModule  ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('[login check] should create', () => {
    let email=component.loginForm.controls['email'];
    expect(email.valid).toBeFalsy;
    expect(email.pristline).toBeTruthy();
    expect(email.errors['required']).toBeTruthy();
    email.setValue('abc');

    expect(email.errors['email']).toBeTruthy();

  });

  it('[Email-check]- should check users email id is entered',()=>{
    let email=component.loginForm.controls['email'];
    email.setValue('abc@gmail.com')
    expect(email.erors).toBeNull();
  })


  it('[login check] should create', () => {
    let password=component.loginForm.controls['password'];
    expect(password.valid).toBeFalsy;
    expect(password.pristline).toBeTruthy();
    expect(password.errors['required']).toBeTruthy();
    password.setValue('abc');

    expect(password.errors['password']).toBeTruthy();

  });

  it('[Password-check]- should check users password is entered',()=>{
    let password=component.loginForm.controls['password'];
    password.setValue('password')
    expect(password.erors).toBeNull();
  });


  it('[Form-Submit]-should check form is submitted', ()=>{
    expect(component.loginForm.invalid).toBeTruthy();
    let btn=fixture.debugElement.query(By.css('input[type=submit]'));

    expect (btn.nativeElement.disabled).toBeTruthy();
    
    component.loginForm.controls['email'].setValue('abc@xyz.com');
    component.loginForm.controls['password'].setValue('123456');
    
    component.onSubmit();
    fixture.detectChanges();
    expect(btn.nativeElement.disabled).toBeFalsy();
});
});
