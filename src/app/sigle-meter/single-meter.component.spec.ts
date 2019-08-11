import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleMeterComponent } from './single-meter.component';

describe('SigleMeterComponent', () => {
  let component: SingleMeterComponent;
  let fixture: ComponentFixture<SingleMeterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleMeterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleMeterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
