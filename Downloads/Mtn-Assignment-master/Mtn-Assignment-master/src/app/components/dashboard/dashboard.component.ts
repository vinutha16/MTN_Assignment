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
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any;
  abc: any;
  userd: any;
  email: any;

  constructor(private store:Store<UserState>, private router: Router,) { }

  ngOnInit(): void {

    this.userd=JSON.stringify(localStorage.getItem("datas"));

console.log(this.userd, "dd");
  }
  logout(){
    this.router.navigateByUrl('/login');

    this.store.dispatch({
      type:'logout'
    });

  }

}
