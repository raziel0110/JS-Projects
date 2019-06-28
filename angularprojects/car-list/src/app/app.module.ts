import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CarsComponent } from "./cars/cars.component";
import { CarDetailComponent } from "./car-detail/car-detail.component";

@NgModule({
  declarations: [AppComponent, CarsComponent, CarDetailComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
