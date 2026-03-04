import { Injectable } from '@angular/core';
import { Course } from '../models/course.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Student } from '../models/student.model';

@Injectable({
  providedIn: 'root',
})
export class CourseService {

  /* we are going to use DB and backend API to fetch courses data, so we are moving the hardcoded courses data from courses-list component to this service to make it more dynamic and reusable across the app 
  private courses: Course[] = [
    { id: 1, name: 'Angular Basics', description: 'Learn the basics of Angular.', price: 100, date: new Date('2024-07-01'), soldOut: true, img: 'AngularLogo.png', onSale: false },
    { id: 2, name: 'Advanced Angular', description: 'Deep dive into Angular features.', price: 150, date: new Date('2024-08-01'), soldOut: false, img: 'AngularLogo.png', onSale: true },
    { id: 3, name: 'Angular Forms', description: 'Master forms in Angular.', price: 120, date: new Date('2024-09-01'), soldOut: true, img: 'AngularLogo.png', onSale: false },
    { id: 4, name: 'RxJs', description: 'Learn reactive programming with RxJs.', price: 130, date: new Date('2024-10-01'), soldOut: false, img: 'RxJsLogo.jpg', onSale: true },
  ];   */

  private baseUrl = 'http://localhost:3000'; // Base URL for the backend API

  constructor(private http: HttpClient) { 
    // dependency constructor injection of HttpClient to make API calls to backend

  }

  // GET all courses from the backend API
  getCourses(description?: string | null): Observable<Course[]> {
    // return this.courses;
    let url = `${this.baseUrl}/courses`;
    if (description) {
      url += `?description=${description}`; // Add query parameter for filtering by description
    }
    return this.http.get<Course[]>(url); // Make an HTTP GET request to fetch courses from the backend API and transform date strings to Date objects
    // http.get is async and returns an Observable, so we need to subscribe to it in the component to get the data
  }

  // POST method to add a new course to the backend API
  addCourse(course: Course): Observable<Course> {
    return this.http.post<Course>(`${this.baseUrl}/courses`, course); // Make an HTTP POST request to add a new course to the backend API
  }

  // GET course by id
  getCourseById(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.baseUrl}/courses/${id}`); // Make an HTTP GET request to fetch a course by id from the backend API
  }

  addStudent(student: Student): Observable<Student> {
    return this.http.post<Student>(`${this.baseUrl}/students`, student); // Make an HTTP POST request to add a new student to the backend API
  }

  getStudents(): Observable<Student[]> {
    return this.http.get<Student[]>(`${this.baseUrl}/students`); // Make an HTTP GET request to fetch all students from the backend API
  }

  getEnrolledCourses(students: Student[]): Observable<Course[]> {    const enrolledCourseIds: number[] = [];
    students.forEach(student => {
      enrolledCourseIds.push(...student.enrolledCourseIds);
    });
    return this.getCourses().pipe(
      map(courses => courses.filter(course => enrolledCourseIds.includes(course.id)))
    );
  }


}
