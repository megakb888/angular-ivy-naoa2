import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactFormBasicComponent } from './contact-form-basic.component';

describe('ContactFormBasicComponent', () => {
  let component: ContactFormBasicComponent;
  let fixture: ComponentFixture<ContactFormBasicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactFormBasicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactFormBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
