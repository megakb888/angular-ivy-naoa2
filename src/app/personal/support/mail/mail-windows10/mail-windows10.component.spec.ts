import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailWindows10Component } from './mail-windows10.component';

describe('MailWindows10Component', () => {
  let component: MailWindows10Component;
  let fixture: ComponentFixture<MailWindows10Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailWindows10Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailWindows10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
