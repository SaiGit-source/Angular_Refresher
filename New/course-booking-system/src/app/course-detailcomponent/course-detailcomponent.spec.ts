import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseDetailcomponent } from './course-detailcomponent';

describe('CourseDetailcomponent', () => {
  let component: CourseDetailcomponent;
  let fixture: ComponentFixture<CourseDetailcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CourseDetailcomponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CourseDetailcomponent);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
