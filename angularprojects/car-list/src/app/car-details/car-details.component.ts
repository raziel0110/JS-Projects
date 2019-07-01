import { Component, OnInit, Input } from "@angular/core";
import { Car } from "../models/car";

@Component({
  selector: "app-car-details",
  templateUrl: "./car-details.component.html",
  styleUrls: ["./car-details.component.css"]
})
export class CarDetailsComponent implements OnInit {
  @Input() car: Car;

  constructor() {}

  ngOnInit() {}
}
