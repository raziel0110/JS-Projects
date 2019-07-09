import {
  Directive,
  HostBinding,
  HostListener,
  ElementRef
} from "@angular/core";

@Directive({
  selector: "[appRainbow]"
})
export class RainbowDirective {
  possibleColors: string[] = [
    "darksalmon",
    "hotpink",
    "lightskyblue",
    "goldenrod",
    "peachpuff",
    "mediumspringgreen",
    "cornflowerblue",
    "blanchedalmond"
  ];
  element: HTMLInputElement;

  constructor(private elRef: ElementRef) {
    this.element = this.elRef.nativeElement;
  }

  @HostBinding("style.color") color: string;
  @HostBinding("style.background-color") borderColor: string;

  @HostListener("keydown") newColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.color = this.possibleColors[colorPick];
  }
  @HostListener("keydown") randomBorderColor() {
    const colorPick = Math.floor(Math.random() * this.possibleColors.length);
    this.borderColor = this.possibleColors[colorPick];
  }
}
