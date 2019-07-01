import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarsComponent } from "./cars/cars.component";
import { HeaderComponent } from './layout/header/header.component';
import { CarDetailsComponent } from './car-details/car-details.component';

@NgModule({
  declarations: [AppComponent, CarsComponent, HeaderComponent, CarDetailsComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
