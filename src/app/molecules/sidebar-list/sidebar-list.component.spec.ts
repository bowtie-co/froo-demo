import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarListComponent } from './sidebar-list.component';

import { imports } from '../../app.imports';
import { declarations } from '../../app.declarations';

describe('SidebarListComponent', () => {
  let component: SidebarListComponent;
  let fixture: ComponentFixture<SidebarListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations,
      imports
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
