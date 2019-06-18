import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetails2Component } from './location-details2.component';

describe('LocationDetails2Component', () => {
  let component: LocationDetails2Component;
  let fixture: ComponentFixture<LocationDetails2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDetails2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDetails2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
