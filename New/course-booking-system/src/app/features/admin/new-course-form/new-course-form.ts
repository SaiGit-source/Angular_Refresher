import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CourseService } from '../../../services/course-service';
import { Course } from '../../../models/course.model';
import { CourseFactory } from './course-factory';

@Component({
  selector: 'app-new-course-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './new-course-form.html',
  styleUrl: './new-course-form.css',
  standalone: true
})
export class NewCourseForm implements OnInit {
  newCourseForm!: FormGroup;

  submissionSuccess: boolean = false;
  submissionError: string | null = '';

  constructor(private fb: FormBuilder, private courseService: CourseService, private cdr: ChangeDetectorRef) {

  }

  ngOnInit(): void {
    this.newCourseForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', [Validators.required, Validators.minLength(10)]],
      price: [0, [Validators.required, Validators.min(0)]],
      date: ['', [Validators.required]],
      img: ['', [Validators.required, Validators.pattern(/(?:png|jpg|jpeg|gif|svg)$/i)]],
      onSale: [false]
    });

  }

  get name() {
      return this.newCourseForm.get('name');
    }
    
    get description() {
      return this.newCourseForm.get('description');
    }
    
    get price() {
      return this.newCourseForm.get('price');
    }
    
    get date() {
      return this.newCourseForm.get('date');
    }
    
    get img() {
      return this.newCourseForm.get('img');
    }
    
    get onSale() {
      return this.newCourseForm.get('onSale');
    } 


    onSubmit(): void {
      if (this.newCourseForm.invalid) {
        return;
      }
      const newCourse: Course = CourseFactory.createCourse({
        name: this.newCourseForm.value.name,
        description: this.newCourseForm.value.description,
        price: this.newCourseForm.value.price,
        date: this.newCourseForm.value.date,
        img: this.newCourseForm.value.img,
        onSale: this.newCourseForm.value.onSale
      });
  
      this.courseService.addCourse(newCourse).subscribe({
        next: (response) => {
          console.log('Course added successfully:', response);
          this.submissionSuccess = true;
          this.submissionError = null;
          this.newCourseForm.reset();
        },
        error: (error) => {
          console.error('Error adding course:', error);
          this.submissionSuccess = false;
          this.submissionError = 'Failed to add course. Please try again.';
        }
      });
    } 
  
}

