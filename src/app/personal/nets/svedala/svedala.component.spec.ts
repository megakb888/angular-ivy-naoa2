import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvedalaComponent } from './svedala.component';

describe('SvedalaComponent', () => {
  let component: SvedalaComponent;
  let fixture: ComponentFixture<SvedalaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvedalaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvedalaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
