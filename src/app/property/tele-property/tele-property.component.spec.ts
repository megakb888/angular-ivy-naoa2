import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelePropertyComponent } from './tele-property.component';

describe('TelePropertyComponent', () => {
  let component: TelePropertyComponent;
  let fixture: ComponentFixture<TelePropertyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelePropertyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelePropertyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
