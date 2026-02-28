import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, NgStyle } from '@angular/common';


@Component({
  selector: 'app-course-card',
  imports: [CommonModule, DatePipe, NgStyle, CurrencyPipe],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css',
})
export class CourseCard {
  @Input() course: any; // In a real application, you would likely define a Course interface and use that instead of 'any'. 
  // it received 'course' data from the for loop in the parent component (courses-list) and can use that data to display course details and handle user interactions related to that specific course.
  @Output() courseBookedListener = new EventEmitter<any>(); // Event emitter to notify parent component about booking
  @Output() addWishlistListener = new EventEmitter<any>(); // Event emitter to notify parent component about adding to wishlist

  /*
    viewDetails(courseName: string): void {
    // Logic to view course details, e.g., navigate to a course details page
    alert(`Viewing details for course: ${courseName}`);
  } */

  onCourseBooked(): void {
    // Logic to book the course, e.g., call an API to book the course, show confirmation message, etc.
    alert(`Course booked from Child: ${this.course.name}`);
    this.courseBookedListener.emit(this.course); // Emit event to notify parent component about booking
    // informing parent an event has occurred in the child component, and passing the course data as an argument to the parent component's event handler.
  }

  onAddWishlist(): void {
    // Logic to add the course to a wishlist, e.g., call an API to add to wishlist, show confirmation message, etc.
    alert(`Course added to wishlist from Child: ${this.course.name}`);
    this.addWishlistListener.emit(this.course); // Emit event to notify parent component about adding to wishlist
    // the data that child is sending is this.course.name, which is the name of the course that was added to the wishlist. The parent component can then use this information to update its state or perform any necessary actions related to the wishlist.
  }

}
