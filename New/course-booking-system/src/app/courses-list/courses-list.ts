import { Component, OnInit, ChangeDetectorRef  } from '@angular/core';
import { CommonModule, CurrencyPipe, DatePipe, NgStyle } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CourseCard } from '../course-card/course-card';
import { Course } from '../models/course.model';
import { CourseService } from '../services/course-service';

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
  /*courses: Course[] = [
    we are moving it into course-service.ts to make it more dynamic and reusable across the app
    { id: 1, name: 'Angular Basics', description: 'Learn the basics of Angular.', price: 100, date: new Date('2024-07-01'), soldOut: true, img: 'AngularLogo.png', onSale: false },
    { id: 2, name: 'Advanced Angular', description: 'Deep dive into Angular features.', price: 150, date: new Date('2024-08-01'), soldOut: false, img: 'AngularLogo.png', onSale: true },
    { id: 3, name: 'Angular Forms', description: 'Master forms in Angular.', price: 120, date: new Date('2024-09-01'), soldOut: true, img: 'AngularLogo.png', onSale: false },
    { id: 4, name: 'RxJs', description: 'Learn reactive programming with RxJs.', price: 130, date: new Date('2024-10-01'), soldOut: false, img: 'RxJsLogo.jpg', onSale: true },
     
  ];*/

   //courses: Course[] = []; // Initialize courses as an empty array, we will fetch the data from the service in ngOnInit()
   courses: Course[] = [];// Using signal to manage courses state, we will fetch the data from the service in ngOnInit() and update this signal

  // constructor dependency injection to make courseService available here
  constructor(private courseService: CourseService, private route: ActivatedRoute, private cdr: ChangeDetectorRef) { 

  } 

/*
  ngOnInit() {
    // Logic to fetch courses from an API can be added here
    console.log('CoursesList component initialized!');
    // this.courses = [];
    //this.courses = this.courseService.getCourses(); // Fetch courses from the service
    // subscribe to the Observable returned by getCourses() to get the data when it arrives
    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses=data; 
        this.cdr.markForCheck(); // Trigger change detection
        console.log('Courses received from service:', this.courses); // debug output
      },
      error: (error) => {
        console.error('Error fetching courses:', error); // Log any errors that occur during the API call
      }
    });

  }
*/
ngOnInit() {
  // Load courses when route activates (handles navigate-back)
  this.route.queryParamMap.subscribe((params) => {
    const description = params.get('description') || '';
    this.loadCourses(description);
  });
}

  loadCourses(description: string): void {
    this.courseService.getCourses(description).subscribe({
      next: (data: Course[]) => {
        this.courses = data; // Update the courses property with the data fetched from the backend API
        console.log('Courses received from service:', this.courses); // debug output
        this.cdr.markForCheck(); // Trigger change detection
      },
      error: (error) => {
        console.error('Error fetching courses:', error); // Log any errors that occur during the API call
      }
    });

  }



/*
ngOnInit() {
  // Load courses when route activates (handles navigate-back)
  this.route.params.subscribe(() => {
    this.loadCourses();
  });
  // Also load on initial component load
  this.loadCourses();
}

loadCourses() {
  this.courseService.getCourses().subscribe({
    next: (data: Course[]) => {
      this.courses = data;
      console.log('Courses received:', this.courses);
    },
    error: (error) => console.error('Error:', error)
  });
}
*/
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

