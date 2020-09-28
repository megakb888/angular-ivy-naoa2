import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitynetsComponent } from './citynets.component';

describe('CitynetsComponent', () => {
  let component: CitynetsComponent;
  let fixture: ComponentFixture<CitynetsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitynetsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitynetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
