import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationDetails3Component } from './location-details3.component';

describe('LocationDetails3Component', () => {
  let component: LocationDetails3Component;
  let fixture: ComponentFixture<LocationDetails3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationDetails3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationDetails3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
