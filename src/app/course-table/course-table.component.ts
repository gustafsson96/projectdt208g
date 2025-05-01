import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../services/course.service';
import { Course } from '../models/course';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-course-table',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './course-table.component.html',
  styleUrl: './course-table.component.css'
})
export class CourseTableComponent {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  filteredValue: string = "";

  constructor(private courseService : CourseService) {}

  ngOnInit() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data;
    });
  }

  applyFilter(): void {
    const filter = this.filteredValue.toLowerCase();
    this.filteredCourses = this.courses.filter((course) =>
      course.courseName.toLowerCase().includes(filter) ||
      course.courseCode.toLowerCase().includes(filter)
    );
  }
}
