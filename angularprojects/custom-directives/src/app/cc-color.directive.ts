import {
  Directive,
  ElementRef,
  HostListener,
  Renderer2,
  HostBinding
} from "@angular/core";

@Directive({
  selector: "[appCcColor]"
})
export class CcColorDirective {
  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding("style.border") border: string;

  @HostListener("mouseover") onMove() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "backgroundColor",
      "lightgray"
    );

    this.border = "1px solid black";
  }

  @HostListener("mouseout") onMoveOut() {
    this.renderer.setStyle(
      this.elRef.nativeElement,
      "backgroundColor",
      "transparent"
    );

    this.border = "none";
  }
}
