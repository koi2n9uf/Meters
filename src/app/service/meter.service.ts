import * as _ from 'lodash';
import {Subject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
@Injectable()
export class MeterService {
  private switchOff = 'switch off';
  private switchOn = 'switch on';
  monitorSwitchAll = true;
  metersSubject = new Subject<any[]>();
  private meters = [];
  constructor(private httpClient: HttpClient) {}
  emitMetersSubject() {
  this.metersSubject.next(this.meters.slice());
  }
  getAppareilById(id: number) {
    return _.find(this.meters, {id});
  }
  switchAll($event) {
    _.map(this.meters, meter => $event ? meter.status = this.switchOff : meter.status = this.switchOn);
    this.emitMetersSubject();
  }

  onchange(status) {
    return  status === this.switchOn;
    this.emitMetersSubject();

  }
  switch(event, name) {
    _.forEach(this.meters, meter => {
      if (meter.name === name) {
        event ? meter.status = this.switchOn : meter.status = this.switchOff;
      }
    });
    if (this.monitorSwitchAllOn()) {
      this.monitorSwitchAll = true;
    } else if ( this.monitorSwitchAllOff()) {
      this.monitorSwitchAll = false;
    }
    this.emitMetersSubject();
  }

  getOnClassColor(status) {
    return status === this.switchOn;
    this.emitMetersSubject();

  }
  getOffClassColor(status) {
    return status === this.switchOff;
    this.emitMetersSubject();

  }

  monitorSwitchAllOn() {
   return _.filter(this.meters, meter => meter.status === this.switchOn).length === this.meters.length;
   this.emitMetersSubject();
  }

  monitorSwitchAllOff() {
   return _.filter(this.meters, meter => meter.status === this.switchOff).length === this.meters.length;
   this.emitMetersSubject();

  }

  addMeter(name: string, status: string) {
    const meter = {
      id : this.meters.length + 1,
      name,
      status
    };
    this.meters.push(meter);
    this.emitMetersSubject();
  }

  saveMeterToServer() {
    this.httpClient
      .put(`${environment.firebaseConfig.databaseURL}/meters.json`, this.meters)
      .subscribe(
        () => console.log('save success !!!'),
        error => console.log('save fails !!!' + error)
      );
  }
  getMeterFromServer() {
    this.httpClient
      .get<any[]>(`${environment.firebaseConfig.databaseURL}/meters.json`)
      .subscribe(
        meters => {
          // @ts-ignore
          this.meters = _.isArray(meters) ? meters : meters[Object.keys(meters)];

          this.emitMetersSubject();
        },
        error => console.log('Loading error !!!' + error)
      );
  }
}
