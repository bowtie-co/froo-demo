import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RacersComponent } from './racers.component';
import { imports } from '../../app.imports';
import { declarations } from '../../app.declarations';

describe('RacersComponent', () => {
  let component: RacersComponent;
  let fixture: ComponentFixture<RacersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports,
      declarations
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RacersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
