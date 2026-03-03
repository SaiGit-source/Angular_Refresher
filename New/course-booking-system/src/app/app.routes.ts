import { Routes } from '@angular/router';
import { CoursesList } from './courses-list/courses-list';
import { CourseDetailcomponent } from './course-detailcomponent/course-detailcomponent';
import { AboutComponent } from './about-component/about-component';
import { SignUpForm } from './sign-up-form/sign-up-form';
import { NewCourseForm } from './new-course-form/new-course-form';

export const routes: Routes = [
    { path: '', redirectTo: '/courses', pathMatch: 'full' }, // Redirect root path to /courses
    { path: 'courses', component: CoursesList }, // Lazy load CoursesList component for /courses path
    { path: 'courses/:id', component: CourseDetailcomponent}, // Route for course details page with dynamic id parameter
    { path: 'about', component: AboutComponent}, // Route for about page
    { path: 'sign-up', component: SignUpForm}, // Route for sign-up form page];
    { path: 'add-course', component: NewCourseForm}, // Route for sign-up form page];
]
