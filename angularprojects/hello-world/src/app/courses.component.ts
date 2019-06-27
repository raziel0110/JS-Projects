import { Component } from "@angular/core";
import { CoursesService } from "./courses.service";

//decorator function
@Component({
  selector: "courses",
  template: `
    <h2>{{ title }}</h2>
    <ul>
      <li *ngFor="let course of courses">
        {{ course }}
      </li>
    </ul>
  `
})
export class CoursesComponent {
  title = "List of Courses";
  courses;

  constructor(service: CoursesService) {
    this.courses = service.getCourses();
  }
}
