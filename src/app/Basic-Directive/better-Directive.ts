import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  OnInit,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[betterDirective]',
})
export class BetterDirective implements OnInit {
  constructor(private eleref: ElementRef, private render: Renderer2) {}

  ngOnInit() {
    // this.render.setStyle(this.eleref.nativeElement,'backgroundColor','red')
  }

  @HostBinding('style.backgroundColor') backgroundColor = 'transparent';

  @HostListener('mouseover') mouseover() {
    // this.render.setStyle(this.eleref.nativeElement, 'backgroundColor', 'red');
    this.backgroundColor = 'blue';
  }

  @HostListener('mouseleave') mouseleave() {
    //   this.render.setStyle(this.eleref.nativeElement, 'backgroundColor', 'green');
    // }
    this.backgroundColor = 'transparent';
  }
}
