import { Component } from "@angular/core";
import { FormGroup, FormArray, FormControl } from "@angular/forms";

@Component({
  selector: "course-form",
  templateUrl: "./course-form.component.html",
  styleUrls: ["./course-form.component.css"]
})
export class CourseFormComponent {
  form = new FormGroup({
    topics: new FormArray([])
  });

  addTopic(topic: HTMLInputElement) {
    (this.form.get("topics") as FormArray).push(new FormControl(topic.value));
    topic.value = "";
  }

  remove(topic: FormControl) {
    let index = this.topics.controls.indexOf(topic);
    this.topics.removeAt(index);
  }

  get topics() {
    return this.form.get("topics") as FormArray;
  }
}
