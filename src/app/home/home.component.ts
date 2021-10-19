import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { getUser } from '../user/state/user.actions';
import { isAuthenticated } from '../user/state/user.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userData :Observable<any>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  
  }

}
