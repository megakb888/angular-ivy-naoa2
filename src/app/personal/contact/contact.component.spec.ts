import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPersonalComponent } from './contact.component';

describe('ContactComponent', () => {
  let component: ContactPersonalComponent;
  let fixture: ComponentFixture<ContactPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
