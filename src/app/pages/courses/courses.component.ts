import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { Course } from '../../models/course';
import { ScheduleService } from '../../services/schedule.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-courses',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css'
})
export class CoursesComponent {
  courses: Course[] = [];
  filteredCourses: Course[] = [];
  paginatedCourses: Course[] = [];
  filteredValue: string = "";
  lastAddedCourseCode: string | null = null;
  lastErrorCourseCode: string | null = null;

  currentPage = 1;
  itemsPerPage = 10;

  constructor(
    private courseService: CourseService,
    private scheduleService: ScheduleService
  ) { }

  ngOnInit() {
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data;
      this.updatePaginatedCourses();
    });
  }

  applyFilter(): void {
    const filter = this.filteredValue.toLowerCase();
    this.filteredCourses = this.courses.filter((course) =>
      course.courseName.toLowerCase().includes(filter) ||
      course.courseCode.toLowerCase().includes(filter)
    );
    this.currentPage = 1;
    this.updatePaginatedCourses();
  }

  // Add course to schedule and show success/error message
  addCourseToSchedule(course: Course) {
    const success = this.scheduleService.addCourse(course);
    if (success) {
      // Success message when course is added
      this.lastErrorCourseCode = null; // Ensure there is no error message
      this.lastAddedCourseCode = course.courseCode;
      // Clear message after 3 seconds
      setTimeout(() => {
        this.lastAddedCourseCode = null
      }, 2000);
    } else {
      // Error message if course already exists
      this.lastAddedCourseCode = null; // Ensure there is no success message
      this.lastErrorCourseCode = course.courseCode;

      setTimeout(() => {
        // Clear message after 3 seconds
        this.lastErrorCourseCode = null;
      }, 3000);
    }
  }

  // Site pagination
  updatePaginatedCourses(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedCourses = this.filteredCourses.slice(start, end);
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedCourses();
    }
  }

  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedCourses();
    }
  }

  get totalPages(): number {
    return Math.ceil(this.filteredCourses.length / this.itemsPerPage);
  }
}
