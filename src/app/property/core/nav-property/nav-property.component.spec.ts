import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPropertyComponent } from './nav-property.component';

describe('NavPropertyComponent', () => {
  let component: NavPropertyComponent;
  let fixture: ComponentFixture<NavPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
