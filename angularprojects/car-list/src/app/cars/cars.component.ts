import { Component, OnInit } from "@angular/core";
import { Car } from "../models/car";
import { CarsService } from "../services/cars.service";

@Component({
  selector: "cars",
  templateUrl: "./cars.component.html",
  styleUrls: ["./cars.component.css"]
})
export class CarsComponent implements OnInit {
  cars: Car[];
  selectedCar: Car;

  constructor(private carsService: CarsService) {}
  getCars(): void {
    this.carsService.getCars().subscribe(cars => (this.cars = cars));
  }

  ngOnInit() {
    this.getCars();
  }

  onSelectCar(car) {
    this.selectedCar = car;
  }
}
