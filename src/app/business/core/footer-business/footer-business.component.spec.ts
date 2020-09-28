import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterBusinessComponent } from './footer-business.component';

describe('FooterBusinessComponent', () => {
  let component: FooterBusinessComponent;
  let fixture: ComponentFixture<FooterBusinessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterBusinessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
