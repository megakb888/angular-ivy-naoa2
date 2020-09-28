import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitynetSearchComponent } from './citynet-search.component';

describe('CitynetSearchComponent', () => {
  let component: CitynetSearchComponent;
  let fixture: ComponentFixture<CitynetSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitynetSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitynetSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
