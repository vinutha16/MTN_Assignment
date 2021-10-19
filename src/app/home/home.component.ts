import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AppState } from '../app.state';
import { User } from '../user/model/user.model';
import { getUser } from '../user/state/user.actions';
import { getUserName } from '../user/state/user.selector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User = new User();
  userData :Observable<any>;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
   this.userData= this.store.select(getUserName)
   this.userData.subscribe((state) => {
     debugger
    if (state) {
      this.user = state;
    }
  });
  }

}
