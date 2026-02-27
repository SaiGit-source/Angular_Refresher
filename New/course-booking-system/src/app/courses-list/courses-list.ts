import { Component } from '@angular/core';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-courses-list',
  imports: [DatePipe],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList {
  title: string = 'Available courses';
  // Data binding example: List of courses
  courses = [
    { id: 1, name: 'Angular Basics', description: 'Learn the basics of Angular.', price: 100, date: new Date('2024-07-01') },
    { id: 2, name: 'Advanced Angular', description: 'Deep dive into Angular features.', price: 150, date: new Date('2024-08-01') },
    { id: 3, name: 'Angular Forms', description: 'Master forms in Angular.', price: 120, date: new Date('2024-09-01') },
  ]
}

