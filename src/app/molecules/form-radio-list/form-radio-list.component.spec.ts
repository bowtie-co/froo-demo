import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRadioListComponent } from './form-radio-list.component';

describe('FormRadioListComponent', () => {
  let component: FormRadioListComponent;
  let fixture: ComponentFixture<FormRadioListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormRadioListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRadioListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
