import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CoursesComponent } from "./courses.component";
import { CourseComponent } from "./course/course.component";
import { CoursesService } from "./courses.service";
import { CursComponent } from "./curs/curs.component";
import { AuthorsService } from "./authors.service";
import { AuthorsComponent } from "./authors/authors.component";

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    CursComponent,
    AuthorsComponent
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [CoursesService, AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
