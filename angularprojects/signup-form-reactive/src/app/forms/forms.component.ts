import { Component } from "@angular/core";
import { FormGroup, FormControl, FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector: "forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent {
  form = new FormGroup({
    name: new FormControl(),
    contact: new FormGroup({
      email: new FormControl(),
      phone: new FormControl()
    }),
    topics: new FormArray([])
  });
}
