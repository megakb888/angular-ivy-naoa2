import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormBusinessComponent } from './contact-form-business.component';

describe('ContactFormBusinessComponent', () => {
  let component: ContactFormBusinessComponent;
  let fixture: ComponentFixture<ContactFormBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
