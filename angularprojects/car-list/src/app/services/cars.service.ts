import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { Car } from "../models/car";
import { CARS } from "../mock-cars";

@Injectable({
  providedIn: "root"
})
export class CarsService {
  constructor() {}

  getCars(): Observable<Car[]> {
    return of(CARS);
  }
}
