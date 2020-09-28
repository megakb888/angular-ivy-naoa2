import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBusinessComponent } from './nav-business.component';

describe('NavBusinessComponent', () => {
  let component: NavBusinessComponent;
  let fixture: ComponentFixture<NavBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
