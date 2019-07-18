import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { FormTemplateExerciseComponent } from "./form-template-exercise/form-template-exercise.component";
import { FormReactiveComponent } from "./form-reactive/form-reactive.component";
import { ReactiveExerciseComponent } from './reactive-exercise/reactive-exercise.component';

@NgModule({
  declarations: [
    AppComponent,
    FormTemplateExerciseComponent,
    FormReactiveComponent,
    ReactiveExerciseComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
