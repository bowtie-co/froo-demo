import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputComponent } from './input.component';

import { imports } from '../../app.imports';
import { declarations } from '../../app.declarations';


describe('BtnComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
