import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { AuthorsComponent } from "./authors/authors.component";
import { AuthorsService } from "./authors.service";
import { DatesComponent } from "./dates/dates.component";
import { NewdateComponent } from "./newdate/newdate.component";
import { CourseComponent } from "./course/course.component";
import { SummaryPipe } from "./summary.pipe";

@NgModule({
  declarations: [
    AppComponent,
    AuthorsComponent,
    DatesComponent,
    NewdateComponent,
    CourseComponent,
    SummaryPipe
  ],
  imports: [BrowserModule, FormsModule],
  providers: [AuthorsService],
  bootstrap: [AppComponent]
})
export class AppModule {}
