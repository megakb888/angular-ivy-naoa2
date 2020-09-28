import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvenljungaComponent } from './svenljunga.component';

describe('SvenljungaComponent', () => {
  let component: SvenljungaComponent;
  let fixture: ComponentFixture<SvenljungaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvenljungaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvenljungaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
