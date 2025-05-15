import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { CoursesComponent } from './pages/courses/courses.component';

export const routes: Routes = [
    { path: "", redirectTo: 'home', pathMatch: 'full' },
    { path: "home", component: HomeComponent}, 
    { path: "courses", component: CoursesComponent}, 
    { path: "schedule", component: ScheduleComponent}
];
