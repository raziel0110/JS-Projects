import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  loadedFeature: string = "recipe";
  title = "recepies-app";

  onNavigate(feature) {
    this.loadedFeature = feature;
  }
}
