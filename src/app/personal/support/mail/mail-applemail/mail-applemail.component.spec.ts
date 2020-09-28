import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailApplemailComponent } from './mail-applemail.component';

describe('MailApplemailComponent', () => {
  let component: MailApplemailComponent;
  let fixture: ComponentFixture<MailApplemailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailApplemailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailApplemailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
