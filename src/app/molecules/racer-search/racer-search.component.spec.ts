import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { RacerSearchComponent } from './racer-search.component';

import { imports } from '../../app.imports';
import { declarations } from '../../app.declarations';

describe('RacerSearchComponent', () => {
  let component: RacerSearchComponent;
  let fixture: ComponentFixture<RacerSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports,
      declarations
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacerSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
