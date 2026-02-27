import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CoursesList],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('course-booking-system');
}
