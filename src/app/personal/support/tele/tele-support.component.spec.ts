import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeleSupportComponent } from './tele-support.component';

describe('TeleSupportComponent', () => {
  let component: TeleSupportComponent;
  let fixture: ComponentFixture<TeleSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeleSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeleSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
