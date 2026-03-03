import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { CourseService } from '../services/course-service';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-sign-up-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css',
})
export class SignUpForm implements OnInit {
  signUpForm!: FormGroup;
  courses: Course[] = [];

  constructor(private fb: FormBuilder, private courseService: CourseService) {

  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: [''],
      email: [''],
      enrolledCourseId: [null]
    });

    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
      },
      error: (error) => {        
        console.error('Error fetching courses:', error);
      }
    });
  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get enrolledCourseId() {
    return this.signUpForm.get('enrolledCourseId');
  }

}
