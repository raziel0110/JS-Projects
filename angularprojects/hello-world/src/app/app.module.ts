import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CoursesService } from "./courses.service";
import { CursComponent } from "./curs/curs.component";
import { AuthorsService } from "./authors.service";
import { AuthorsComponent } from "./authors/authors.component";

import { TestTutComponent } from "./test-tut/test-tut.component";
import { UsernameComponent } from './username/username.component';
import { ServerComponent } from './server/server.component';
import { ButtonComponent } from './button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    CursComponent,
    AuthorsComponent,
    TestTutComponent,
    UsernameComponent,
    ServerComponent,
    ButtonComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
