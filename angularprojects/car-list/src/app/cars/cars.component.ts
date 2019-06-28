import { Component, OnInit } from "@angular/core";
import { CARS } from "../mock-cars";
import { Car } from "../car";

@Component({
  selector: "cars",
  templateUrl: "./cars.component.html",
  styleUrls: ["./cars.component.css"]
})
export class CarsComponent implements OnInit {
  cars = CARS;
  selectedCar: Car;

  constructor() {}

  onSelect(car: Car): void {
    this.selectedCar = car;
  }
  ngOnInit() {}
}
