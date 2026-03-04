import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Student } from '../../../models/student.model';
import { Course } from '../../../models/course.model';
import { CourseService } from '../../../services/course-service';
import { CommonModule } from '@angular/common'; // for *ngIf and *ngFor

@Component({
  selector: 'app-student-list',
  imports: [CommonModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css',
  standalone: true
})
export class StudentList implements OnInit {
  students: Student[] = [];
  courses: Course[] = [];
  errorMessage: string | null = "";
  loading: boolean = false;

  ngOnInit(): void {
    this.fetchStudents();
    this.fetchCourses();
    }

  constructor(private courseService: CourseService, private cdr: ChangeDetectorRef) {
  }
  
  fetchStudents(): void {
    this.loading = true;

    this.courseService.getStudents().subscribe({
      next: (data: Student[]) => {
        this.students = data;
        this.loading = false;
        this.cdr.markForCheck(); // Trigger change detection
      },
      error: (error: any) => {
        this.errorMessage = "Failed to load students. Please try again later.";
        console.error("Error fetching students:", error);
        this.loading = false;
      }
    });

  }


  fetchCourses(): void {
    this.loading = true;
    this.courseService.getCourses().subscribe({
      next: (data: Course[]) => {
        this.courses = data;
        this.loading = false;
        this.cdr.markForCheck(); // Trigger change detection
      },
      error: (error: any) => {
        this.errorMessage = "Failed to load courses. Please try again later.";
        console.error("Error fetching courses:", error);
        this.loading = false;
      }
    });
}

getCourseName(courseId: number): string {
  const course = this.courses.find(c => c.id == courseId);
  return course ? course.name : "Unknown Course";
}

}
