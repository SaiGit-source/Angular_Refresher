import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { CourseService } from '../services/course-service';
import { Course } from '../models/course.model';
import { Student } from '../models/student.model';
import { StudentFactory } from '../student-factory';

@Component({
  selector: 'app-sign-up-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-up-form.html',
  styleUrl: './sign-up-form.css',
})
export class SignUpForm implements OnInit {
  signUpForm!: FormGroup;
  courses: Course[] = [];
  submissionSuccess: boolean = false;
  submissionError: string | null = '';

  constructor(private fb: FormBuilder, private courseService: CourseService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      enrolledCourseId: [null, Validators.required]
    });

    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
        this.cdr.markForCheck(); // Trigger change detection
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

  onSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }
    const newStudent: Student = StudentFactory.createStudent({
      //id: 0, // ID will be set by the backend
      name: this.signUpForm.value.name,
      email: this.signUpForm.value.email,
      enrolledCourseIds: [this.signUpForm.value.enrolledCourseId]
    });

    this.courseService.addStudent(newStudent).subscribe({
      next: (response) => {
        console.log('Student added successfully:', response);
        this.submissionSuccess = true;
        this.submissionError = null;
        this.signUpForm.reset();
      },
      error: (error) => {
        console.error('Error adding student:', error);
        this.submissionSuccess = false;
        this.submissionError = 'Failed to sign up. Please try again.';
      }
    });
  } 

}
