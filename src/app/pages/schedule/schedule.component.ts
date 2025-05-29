import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Course } from '../../models/course';
import { ScheduleService } from '../../services/schedule.service';

@Component({
  selector: 'app-schedule',
  imports: [CommonModule],
  templateUrl: './schedule.component.html',
  styleUrl: './schedule.component.css'
})
export class ScheduleComponent implements OnInit {
  savedSchedule: Course[] = [];
  removedCourseName: string | null = null;
  allCoursesCleared: boolean = false;

  constructor(private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.loadSchedule();
  }

  // Load saved courses from localStorage via service
  loadSchedule(): void {
    this.savedSchedule = this.scheduleService.getSavedSchedule();
  }

  // Remove course, display message and refresh list
  removeCourse(courseCode: string): void {
    const removedCourse = this.savedSchedule.find(c => c.courseCode === courseCode);
    if (removedCourse) {
      this.scheduleService.removeCourse(courseCode);
      this.loadSchedule();
      this.removedCourseName = removedCourse.courseName;
  
      setTimeout(() => {
        this.removedCourseName = null;
      }, 4000);
    }
  }

    // Calculate total points
    getTotalPoints(): number {
      return this.savedSchedule.reduce((total, course) => total + course.points, 0);
    }

    // Clear all courses
    clearAllCourses(): void {
      this.scheduleService.clearSchedule();
      this.loadSchedule();
      this.allCoursesCleared = true;

      setTimeout(() => {
        this.allCoursesCleared = false;
      }, 4000);
    }
  }
