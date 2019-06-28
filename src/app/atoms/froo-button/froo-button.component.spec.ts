import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrooButtonComponent } from './froo-button.component';

describe('FrooButtonComponent', () => {
  let component: FrooButtonComponent;
  let fixture: ComponentFixture<FrooButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrooButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrooButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
