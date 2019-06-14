import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EcosystemsComponent } from './ecosystems.component';

describe('EcosystemsComponent', () => {
  let component: EcosystemsComponent;
  let fixture: ComponentFixture<EcosystemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EcosystemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EcosystemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
