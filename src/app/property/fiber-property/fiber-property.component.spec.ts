import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiberPropertyComponent } from './fiber-property.component';

describe('FiberPropertyComponent', () => {
  let component: FiberPropertyComponent;
  let fixture: ComponentFixture<FiberPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiberPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiberPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
