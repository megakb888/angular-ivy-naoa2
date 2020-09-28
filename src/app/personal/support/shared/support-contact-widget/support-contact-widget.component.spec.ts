import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SupportContactWidgetComponent } from './support-contact-widget.component';

describe('SupportContactWidgetComponent', () => {
  let component: SupportContactWidgetComponent;
  let fixture: ComponentFixture<SupportContactWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupportContactWidgetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SupportContactWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
