import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {MeterService} from '../service/meter.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-meter',
  templateUrl: './add-meter.component.html',
  styleUrls: ['./add-meter.component.scss']
})
export class AddMeterComponent implements OnInit {
  defaultStatus = 'switch off';
    constructor(private meterService: MeterService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    const name = form.value.name;
    const status = form.value.status;
    this.meterService.addMeter(name, status);
    this.router.navigate(['/meters']);
  }
}
