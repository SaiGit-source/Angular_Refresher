import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';
import { CourseDetailcomponent } from "./course-detailcomponent/course-detailcomponent";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, CoursesList, CourseDetailcomponent, RouterLinkActive],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('course-booking-system');
}
