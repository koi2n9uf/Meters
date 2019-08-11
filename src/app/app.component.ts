import {Component, OnInit, OnDestroy} from '@angular/core';
import {Subscription, interval} from 'rxjs';
import {AuthService} from './service/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
connectmessage: string
  secondes: number;
  counterSubscription: Subscription;
  constructor(private authService: AuthService) {
  }
ngOnInit(): void {
      const secondCounter = interval(1000);
      this.counterSubscription = secondCounter.subscribe(
        value => this.secondes = value,
        error => console.error(error),
      );
}
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
