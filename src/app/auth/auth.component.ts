import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  authStatus: boolean;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
    this.authStatus = this.authService.isAuth;
  }

  onsignIn() {
    this.authService.signIn()
      .then(() => {
        this.authStatus = this.authService.isAuth;
        this.router.navigate(['meters']);
      });
  }
  onSignOut() {
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;

  }
}
