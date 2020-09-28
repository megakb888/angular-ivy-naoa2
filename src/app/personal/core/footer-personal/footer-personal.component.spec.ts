import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPersonalComponent } from './footer-personal.component';

describe('FooterPersonalComponent', () => {
  let component: FooterPersonalComponent;
  let fixture: ComponentFixture<FooterPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
