import { Component, OnInit } from "@angular/core";
import { AuthorsService } from "../authors.service";

@Component({
  selector: "authors",
  templateUrl: "./authors.component.html",
  styleUrls: ["./authors.component.css"]
})
export class AuthorsComponent implements OnInit {
  authors;
  email = "example@domain.com";
  isActive = true;
  constructor(service: AuthorsService) {
    this.authors = service.getAuthors();
  }

  onSave($event) {
    $event.stopPropagation();
    console.log("button was click", $event);
  }

  onClickDiv() {
    console.log("Div was click");
  }

  onKeyUp() {
    console.log(this.email);
  }
  ngOnInit() {}
}
