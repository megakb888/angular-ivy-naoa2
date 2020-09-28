import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessErrorReportComponent } from './business-error-report.component';

describe('BusinessErrorReportComponent', () => {
  let component: BusinessErrorReportComponent;
  let fixture: ComponentFixture<BusinessErrorReportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessErrorReportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessErrorReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
