import {
  Directive,
  ElementRef,
  HostListener,
  Renderer,
  Renderer2
} from "@angular/core";

@Directive({
  selector: "[appCcColorHover]"
})
export class CcColorHoverDirective {
  constructor(private elRef: ElementRef, private render: Renderer2) {}

  @HostListener("mouseover") onmouseover() {
    this.render.setStyle(
      this.elRef.nativeElement,
      "backgroundColor",
      "#e6e6e6"
    );
  }

  @HostListener("mouseout") onmouseout() {
    this.render.setStyle(
      this.elRef.nativeElement,
      "backgroundColor",
      "transparent"
    );
  }
}
