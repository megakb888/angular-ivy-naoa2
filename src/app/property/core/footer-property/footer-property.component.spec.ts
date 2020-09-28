import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPropertyComponent } from './footer-property.component';

describe('FooterPropertyComponent', () => {
  let component: FooterPropertyComponent;
  let fixture: ComponentFixture<FooterPropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterPropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
