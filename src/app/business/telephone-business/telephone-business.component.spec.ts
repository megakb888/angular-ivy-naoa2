import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelephoneBusinessComponent } from './telephone-business.component';

describe('TelephoneBusinessComponent', () => {
  let component: TelephoneBusinessComponent;
  let fixture: ComponentFixture<TelephoneBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelephoneBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelephoneBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
