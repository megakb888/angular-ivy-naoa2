import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailThunderbirdComponent } from './mail-thunderbird.component';

describe('MailThunderbirdComponent', () => {
  let component: MailThunderbirdComponent;
  let fixture: ComponentFixture<MailThunderbirdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailThunderbirdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailThunderbirdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
