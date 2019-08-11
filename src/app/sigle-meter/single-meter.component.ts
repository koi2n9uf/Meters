import { Component, OnInit } from '@angular/core';
import {MeterService} from '../service/meter.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-sigle-meter',
  templateUrl: './single-meter.component.html',
  styleUrls: ['./single-meter.component.scss']
})
export class SingleMeterComponent implements OnInit {
name: string;
status: string;
  constructor(private meterService: MeterService, private route: ActivatedRoute) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.name = this.meterService.getAppareilById(+id).name;
    this.status = this.meterService.getAppareilById(+id).status;

  }

}
