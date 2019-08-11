import {Component, OnDestroy, OnInit} from '@angular/core';
import {User} from '../models/User.model';
import {Subscription} from 'rxjs';
import {UserService} from '../service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, OnDestroy {
  private users: User[];
  private userSubscription: Subscription;
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userSubscription = this.userService.userSubject.subscribe(
      (users: User[]) => this.users = users
    );
    this.userService.emitUserSubject();
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
