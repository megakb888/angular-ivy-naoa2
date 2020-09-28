import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TvPropertyComponent } from './tv-property.component';

describe('TvPropertyComponent', () => {
  let component: TvPropertyComponent;
  let fixture: ComponentFixture<TvPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TvPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TvPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
