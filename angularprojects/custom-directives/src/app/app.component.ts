import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  jokes = [
    { joke: "I'm so good at sleeping. I can do it with my eyes closed." },
    {
      joke:
        "Today at the bank, an old lady asked me to help check her balance. So I pushed her over."
    }
  ];
}
