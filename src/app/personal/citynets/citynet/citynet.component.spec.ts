import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitynetComponent } from './citynet.component';

describe('CitynetComponent', () => {
  let component: CitynetComponent;
  let fixture: ComponentFixture<CitynetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitynetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitynetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
