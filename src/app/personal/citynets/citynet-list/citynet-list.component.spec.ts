import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CitynetListComponent } from './citynet-list.component';

describe('CitynetListComponent', () => {
  let component: CitynetListComponent;
  let fixture: ComponentFixture<CitynetListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CitynetListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CitynetListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
