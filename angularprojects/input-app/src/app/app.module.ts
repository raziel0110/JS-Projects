import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InputFormComponent } from "./input-form/input-form.component";
import { QuestionListComponent } from "./question-list/question-list.component";
import { QuestionComponent } from "./question/question.component";
import { FormComponent } from "./form/form.component";
import { FormsModule } from "@angular/forms";
import { HeroFormComponent } from './hero-form/hero-form.component';

@NgModule({
  declarations: [
    AppComponent,
    InputFormComponent,
    QuestionListComponent,
    QuestionComponent,
    FormComponent,
    HeroFormComponent
  ],
  imports: [BrowserModule, AppRoutingModule, ReactiveFormsModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
