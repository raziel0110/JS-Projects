import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  courses;
  isSelected: boolean;
  canSave: boolean = true;
  // onAdd() {
  //   this.courses.push({
  //     id: 4,
  //     name: "course4"
  //   });
  // }

  // onChange(course) {
  //   course.name = "Updated";
  //   // let index = this.courses.indexOf(course);

  //   // this.courses.splice(index, 1);
  // }

  task = {
    title: "Review applications",
    assignee: null
  };

  buttonClick() {
    this.canSave = !this.canSave;
  }

  onClick() {
    this.isSelected = !this.isSelected;
  }

  loadCourses() {
    this.courses = [
      { id: 1, name: "course1" },
      { id: 2, name: "course2" },
      { id: 3, name: "course3" }
    ];
  }

  trackCourse(index, course) {
    return course ? course.id : undefined;
  }

  // viewMode = "map";
}
