import { Component, OnInit } from "@angular/core";

@Component({
  selector: "course",
  template: `
    {{ text | summary: 10 }}
  `
})
export class CourseComponent implements OnInit {
  text = `hfdksjhfdkjsfhgdsfh sd hfdkjsfh dksfjh kdsj hfds`;
  constructor() {}

  ngOnInit() {}
}
