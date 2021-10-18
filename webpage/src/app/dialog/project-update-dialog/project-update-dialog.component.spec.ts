import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectUpdateDialogComponent } from './project-update-dialog.component';

describe('ProjectUpdateDialogComponent', () => {
  let component: ProjectUpdateDialogComponent;
  let fixture: ComponentFixture<ProjectUpdateDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectUpdateDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectUpdateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
