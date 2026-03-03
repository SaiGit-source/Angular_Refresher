import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCourseForm } from './new-course-form';

describe('NewCourseForm', () => {
  let component: NewCourseForm;
  let fixture: ComponentFixture<NewCourseForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCourseForm],
    }).compileComponents();

    fixture = TestBed.createComponent(NewCourseForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
