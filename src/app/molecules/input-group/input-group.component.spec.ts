import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputGroupComponent } from './input-group.component';

import { imports } from '../../app.imports';
import { declarations } from '../../app.declarations';

describe('InputGroupComponent', () => {
  let component: InputGroupComponent;
  let fixture: ComponentFixture<InputGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
