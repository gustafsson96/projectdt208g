import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Course } from '../models/course';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  private url: string = '/miun_courses.json'

  constructor(private http: HttpClient) { }

  // Get courses
  getCourses() : Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }
}
