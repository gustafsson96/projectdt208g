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
  selectedSubject: string = '';
  selectedSort: 'courseCode' | 'courseName' | 'points' | 'subject' | '' = '';
  allSubjects: string[] = [];

  // Current page number for pagination
  currentPage = 1;

  // Number of items to show
  itemsPerPage = 10;

  constructor(
    private courseService: CourseService,
    private scheduleService: ScheduleService
  ) { }

  ngOnInit() {
    // Fetch all courses
    this.courseService.getCourses().subscribe((data) => {
      this.courses = data;
      this.filteredCourses = data;

      // Get courses for subject filtering and sort alphabetically
      this.allSubjects = [...new Set(data.map(course => course.subject))].sort();
      
      // Initialize paginated courses for page 1
      this.updatePaginatedCourses();
    });
  }

  // Apply filtering and sorting
  applyFilter(): void {
    const filter = this.filteredValue.toLowerCase();

    let result = this.courses;

    // Filter by subject if selected
    if (this.selectedSubject) {
      result = result.filter(course => course.subject === this.selectedSubject);
    }

    // Search bar filtering
    result = result.filter((course) =>
      course.courseName.toLocaleLowerCase().includes(filter) ||
      course.courseCode.toLocaleLowerCase().includes(filter)
    );

    // Apply sorting
    if (this.selectedSort) {
      result.sort((a, b) => {
        switch (this.selectedSort) {
          case 'courseCode':
          case 'courseName':
          case 'subject':
            return a[this.selectedSort].localeCompare(b[this.selectedSort]);
          case 'points':
            return a.points - b.points;
          default:
            return 0;
        }
      });
    }

    this.filteredCourses = result;
    this.currentPage = 1;
    this.updatePaginatedCourses();
  }

  // Add course to schedule via ScheduleService
  addCourseToSchedule(course: Course) {
    this.scheduleService.addCourse(course);
  }

  // Check if course is already added
  isCourseAdded(courseCode: string): boolean {
    const savedCourses = this.scheduleService.getSavedSchedule();
    return savedCourses.some(course => course.courseCode === courseCode);
  }

  // Remove a course
  removeCourse(courseCode: string): void {
    this.scheduleService.removeCourse(courseCode);
    this.applyFilter();
  }

  // Site pagination
  updatePaginatedCourses(): void {
    const start = (this.currentPage - 1) * this.itemsPerPage;
    const end = start + this.itemsPerPage;
    this.paginatedCourses = this.filteredCourses.slice(start, end);
  }

  // Go to next page
  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePaginatedCourses();
    }
  }

  // Go to previous page
  prevPage(): void {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePaginatedCourses();
    }
  }

  // Calculate total number of pages based on filtering 
  get totalPages(): number {
    return Math.ceil(this.filteredCourses.length / this.itemsPerPage);
  }
}
