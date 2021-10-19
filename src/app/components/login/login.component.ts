import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from '../../models/users';
import {select, Store} from '@ngrx/store';
import {selectCustomers} from '../../store/selector/login.selectors';
import {UserState} from '../../store/reducer/login.reducer';
import {loginPage} from '../../store/action/login.actions'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
     loading = false;
    submitted = false;
    returnUrl: string |any;
  user:User=new User();
  getState: Observable<any> | any;
userdata:any;
  public loginForm: FormGroup | any;
  messsage: string | any;

  
  constructor(private fb:FormBuilder, private store:Store<UserState>,         private router: Router,
    ) {
     //   this.getState=this.store.select(UserState)
     this.loginForm = this.fb.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.maxLength(20)])
    });
  }
  ngOnInit(): void {
 
   }

  get f() { 
    return this.loginForm.controls
   }
   public onSubmit() {
    this.submitted = true;

  //  // this.router.navigateByUrl('dashobard');
  //   // set payload
  //   const loginpayload = {
  //     email: this.user.email,
  //     password: this.user.password
  //   };
  console.log(this.loginForm.value);
    this.store.dispatch({
      type:'loginPage',
      payload:{users:this.loginForm.value}
    });

    localStorage.setItem("datas", this.loginForm.value);

  if (this.loginForm.invalid) {
    //let abcs=localStorage.setItem(abc, 'this.messsage')
  }
  else{
    this.router.navigateByUrl('/dashboard');
  }
  }

}
  

