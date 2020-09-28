import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessInvoiceComponent } from './business-invoice.component';

describe('BusinessInvoiceComponent', () => {
  let component: BusinessInvoiceComponent;
  let fixture: ComponentFixture<BusinessInvoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessInvoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessInvoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
