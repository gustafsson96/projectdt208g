import { Injectable } from '@angular/core';
import { Course } from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  private storageKey = 'scheduleCourses';

  constructor() { }

  // Get saved courses from local storage 
  getSavedSchedule(): Course[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  // Add course to the schedule
  addCourse(course: Course): boolean {
    const currentSchedule = this.getSavedSchedule();
    // Check if the course exists in schedule to avoid duplicates
    const exists = currentSchedule.some(c => c.courseCode === course.courseCode);
    if (exists) return false;

    // If course does not already exists, push to schedule
    currentSchedule.push(course);
    
    // Save to local storage
    localStorage.setItem(this.storageKey, JSON.stringify(currentSchedule));
    return true;
  }

  // Remove a course
  removeCourse(courseCode: string): void {
    const updatedSchedule = this.getSavedSchedule().filter(c => c.courseCode !== courseCode);
    localStorage.setItem(this.storageKey, JSON.stringify(updatedSchedule));
  }

  // Clear all courses from schedule
  clearSchedule(): void {
    localStorage.removeItem(this.storageKey);
  }
}
