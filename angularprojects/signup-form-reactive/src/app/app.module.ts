import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { SignupComponent } from "./signup/signup.component";
import { ReactiveFormsModule } from "@angular/forms";
import { CourseFormComponent } from "./course-form/course-form.component";
import { FormsComponent } from './forms/forms.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

@NgModule({
  declarations: [AppComponent, SignupComponent, CourseFormComponent, FormsComponent, ChangePasswordComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
