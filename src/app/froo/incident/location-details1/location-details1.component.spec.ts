import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetails1Component } from './location-details1.component';

describe('LocationDetails1Component', () => {
  let component: LocationDetails1Component;
  let fixture: ComponentFixture<LocationDetails1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDetails1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDetails1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
