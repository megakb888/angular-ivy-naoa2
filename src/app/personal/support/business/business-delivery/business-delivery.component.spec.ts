import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessDeliveryComponent } from './business-delivery.component';

describe('BusinessDeliveryComponent', () => {
  let component: BusinessDeliveryComponent;
  let fixture: ComponentFixture<BusinessDeliveryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessDeliveryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
