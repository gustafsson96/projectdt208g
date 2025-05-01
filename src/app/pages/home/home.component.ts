import { Component } from '@angular/core';
import { CourseTableComponent } from '../../course-table/course-table.component';

@Component({
  selector: 'app-home',
  imports: [CourseTableComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
