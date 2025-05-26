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

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.loadSchedule();
  }

  // Load saved courses from localStorage via service
  loadSchedule(): void {
    this.savedSchedule = this.scheduleService.getSavedSchedule();
  }

  // Remove course and refresh list
  removeCourse(courseCode: string): void {
    this.scheduleService.removeCourse(courseCode);
    this.loadSchedule();
  }

  // Calculate total points
  getTotalPoints(): number {
    return this.savedSchedule.reduce((total, course) => total + course.points, 0);
  }
}
