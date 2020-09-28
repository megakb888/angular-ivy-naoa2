import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { XdslComponent } from './xdsl.component';

describe('XdslComponent', () => {
  let component: XdslComponent;
  let fixture: ComponentFixture<XdslComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ XdslComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(XdslComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
