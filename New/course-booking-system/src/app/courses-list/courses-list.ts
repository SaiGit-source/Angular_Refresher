import { Component, OnInit } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { CourseCard } from '../course-card/course-card';
import { Course } from '../models/course.model';

@Component({
  selector: 'app-courses-list',
  imports: [CommonModule, DatePipe, NgStyle, CurrencyPipe, CourseCard],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.css',
})
export class CoursesList implements OnInit {
  title: string = 'Available courses';
  // Data binding example: List of courses
  wishList: Course[] = []; // Array to hold courses added to wishlist
  courses: Course[] = [
    { id: 1, name: 'Angular Basics', description: 'Learn the basics of Angular.', price: 100, date: new Date('2024-07-01'), soldOut: true, img: 'AngularLogo.png', onSale: false },
    { id: 2, name: 'Advanced Angular', description: 'Deep dive into Angular features.', price: 150, date: new Date('2024-08-01'), soldOut: false, img: 'AngularLogo.png', onSale: true },
    { id: 3, name: 'Angular Forms', description: 'Master forms in Angular.', price: 120, date: new Date('2024-09-01'), soldOut: true, img: 'AngularLogo.png', onSale: false },
    { id: 4, name: 'RxJs', description: 'Learn reactive programming with RxJs.', price: 130, date: new Date('2024-10-01'), soldOut: false, img: 'RxJsLogo.jpg', onSale: true },
  ];

  ngOnInit() {
    // Logic to fetch courses from an API can be added here
    console.log('CoursesList component initialized!');
  }

  /*
  viewDetails(courseName: string): void {
    // Logic to view course details, e.g., navigate to a course details page
    alert(`Viewing details for course: ${courseName}`);
  }*/

  onCourseBooked(course: any) {
    // Logic to handle course booking, e.g., update course availability, show confirmation message, etc.
    alert(`Parent heard about booking from Child: ${course.name}`);
  }

  onWishListAdded(course: any) {
    // Logic to handle adding course to wishlist, e.g., update wishlist, show confirmation message, etc.
    alert(`Parent heard about adding to wishlist from Child: ${course.name}`);
    this.wishList.push(course); // Add the course to the wishlist array
    console.log('Current Wishlist:', this.wishList); // Log the current wishlist to the console
  }

}

