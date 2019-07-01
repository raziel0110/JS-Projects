import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "favorite",
  templateUrl: "./favorite.component.html",
  styleUrls: ["./favorite.component.css"]
})
export class FavoriteComponent implements OnInit {
  @Input("isFavorite") isSelected: boolean;
  @Output() change = new EventEmitter();
  title: string;
  constructor() {}

  onClick() {
    this.isSelected = !this.isSelected;
    this.change.emit({ newValue: this.isSelected, name: 3 });
  }
  ngOnInit() {}
}

export interface FavoriteChangedEventArgs {
  newValue: boolean;
  name: string;
}
