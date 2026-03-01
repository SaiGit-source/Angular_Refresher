import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CourseService } from '../services/course-service';
import { Course } from '../models/course.model';
import { CommonModule, CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-course-detailcomponent',
  imports: [CommonModule, NgStyle, DatePipe, CurrencyPipe],
  templateUrl: './course-detailcomponent.html',
  styleUrl: './course-detailcomponent.css',
})
export class CourseDetailcomponent implements OnInit {
  course: Course | null = null; // Initialize course as null, we will fetch the data from the service in ngOnInit()

  constructor(private courseService: CourseService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) {

  }

  ngOnInit() {
    // Subscribe to route parameter changes using paramMap and switchMap
    this.route.paramMap.subscribe(params => {
      const idStr = params.get('id');
      if (idStr) {
        const id = +idStr;
        this.loadCourseById(id);
        console.log('Loading course with id:', id);
      }
    });
  }

  loadCourseById(id: number) {
    this.courseService.getCourseById(id).subscribe({
      next: (data: Course) => {
        this.course = data; // Update the course property with the data fetched from the backend API
        console.log('Course received from service:', this.course); // debug output
        this.cdr.markForCheck(); // Trigger change detection
      },
      error: (error) => {
        console.error('Error fetching course:', error); // Log any errors that occur during the API call
      }
    });
  }
}
