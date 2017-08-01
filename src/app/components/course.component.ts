import {Component, Input} from '@angular/core';
import {CourseServices} from '../services/course.services';

@Component({
  selector: 'app-courses',
  templateUrl: '../../../public/html/courses.component.html',
  providers : [CourseServices]
})

export class CoursesComponent {
  title = 'Course\'s List';
  courses;
  @Input() yr_solve;

  constructor(CS: CourseServices) {
    this.courses = CS.getCourses();
  }
}
