import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrooComponent } from './froo.component';

describe('FrooComponent', () => {
  let component: FrooComponent;
  let fixture: ComponentFixture<FrooComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrooComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
