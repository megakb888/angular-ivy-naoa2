import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriftinfoComponent } from './driftinfo.component';

describe('DriftinfoComponent', () => {
  let component: DriftinfoComponent;
  let fixture: ComponentFixture<DriftinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriftinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriftinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
