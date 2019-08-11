import {Component, OnDestroy, OnInit} from '@angular/core';
import {MeterService} from '../service/meter.service';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-meter-view',
  templateUrl: './meter-view.component.html',
  styleUrls: ['./meter-view.component.scss']
})
export class MeterViewComponent implements OnInit, OnDestroy {

  title = 'Energy';
  isAuth = false;
  lastUpdated = new Date();
  meters: any[];
  meterSubscription: Subscription;
  monitorSwitchAll = this.meterService.monitorSwitchAll;
  constructor(private meterService: MeterService) {
    setTimeout(() => this.isAuth = true , 5000);
  }
  ngOnInit(): void {
    this.meterSubscription = this.meterService.metersSubject.subscribe(
      (meters: any[]) => {
        this.meters = meters;
      }
    );
    this.meterService.emitMetersSubject();
  }
  switchAll($event) {
    this.meterService.switchAll($event);
  }

  ngOnDestroy(): void {
    this.meterSubscription.unsubscribe();
  }
  onSave() {
    this.meterService.saveMeterToServer();
  }
  onFetch() {
this.meterService.getMeterFromServer();
  }
}
