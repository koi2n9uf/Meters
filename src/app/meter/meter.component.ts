import { Component, Input, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {MeterService} from '../service/meter.service';

@Component({
  selector: 'app-meter',
  templateUrl: './meter.component.html',
  styleUrls: ['./meter.component.scss']
})
export class MeterComponent implements OnInit {
  @Input() name: string;
  @Input() status: string;
  @Input() id: number;
  input = new FormControl();

  constructor(private meterService: MeterService) { }

  ngOnInit() {
  }
  onchange() {
    return this.meterService.onchange(this.status);
  }
  switch(event, name) {
    this.meterService.switch(event, name);
  }
  getOnClassColor() {
    return this.meterService.getOnClassColor(this.status);
  }
  getOffClassColor() {
    return this.meterService.getOffClassColor(this.status);
  }
}
