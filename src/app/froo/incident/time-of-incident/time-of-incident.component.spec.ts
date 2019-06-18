import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeOfIncidentComponent } from './time-of-incident.component';

describe('TimeOfIncidentComponent', () => {
  let component: TimeOfIncidentComponent;
  let fixture: ComponentFixture<TimeOfIncidentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeOfIncidentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeOfIncidentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
