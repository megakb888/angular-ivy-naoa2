import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectSupportComponent } from './project-support.component';

describe('ProjectSupportComponent', () => {
  let component: ProjectSupportComponent;
  let fixture: ComponentFixture<ProjectSupportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjectSupportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
