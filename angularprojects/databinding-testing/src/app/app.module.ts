import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ChildComponent } from "./child/child.component";
import { CounterComponent } from "./counter/counter.component";
import { ListComponent } from "./list/list.component";
import { ListItemComponent } from './list/list-item/list-item.component';

@NgModule({
  declarations: [AppComponent, ChildComponent, CounterComponent, ListComponent, ListItemComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
