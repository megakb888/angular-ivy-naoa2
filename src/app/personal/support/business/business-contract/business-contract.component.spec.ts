import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessContractComponent } from './business-contract.component';

describe('BusinessContractComponent', () => {
  let component: BusinessContractComponent;
  let fixture: ComponentFixture<BusinessContractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessContractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessContractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
