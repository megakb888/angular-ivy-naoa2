import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpentimesComponent } from './opentimes.component';

describe('OpentimesComponent', () => {
  let component: OpentimesComponent;
  let fixture: ComponentFixture<OpentimesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpentimesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpentimesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
