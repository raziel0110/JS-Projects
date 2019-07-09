import {
  Directive,
  Renderer2,
  OnInit,
  ElementRef,
  HostListener,
  HostBinding,
  Input
} from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = "transparent";
  @Input() hightlightColor: string = "blue";
  @HostBinding("style.backgroundColor") backgroundColor: string;

  constructor(private elRef: ElementRef, private rederer: Renderer2) {}

  ngOnInit() {
    // this.rederer.setStyle(this.elRef.nativeElement, "background-color", "blue");
    this.backgroundColor = this.defaultColor;
  }

  @HostListener("mouseenter") mouseover(eventData: Event) {
    //this.rederer.setStyle(this.elRef.nativeElement, "background-color", "blue");
    this.backgroundColor = this.hightlightColor;
  }

  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.rederer.setStyle(
    //   this.elRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );

    this.backgroundColor = this.defaultColor;
  }
}
