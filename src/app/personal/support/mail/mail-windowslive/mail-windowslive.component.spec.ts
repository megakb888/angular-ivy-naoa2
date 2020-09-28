import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MailWindowsliveComponent } from './mail-windowslive.component';

describe('MailWindowsliveComponent', () => {
  let component: MailWindowsliveComponent;
  let fixture: ComponentFixture<MailWindowsliveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MailWindowsliveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MailWindowsliveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
