import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPersonalComponent } from './nav.personal.component';

describe('Nav.PersonalComponent', () => {
  let component: NavPersonalComponent;
  let fixture: ComponentFixture<NavPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
