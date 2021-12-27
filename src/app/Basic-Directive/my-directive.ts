import { Directive, ElementRef, OnInit } from '@angular/core';
@Directive({
  selector: '[heigLightColor]',
})
export class myDirective implements OnInit {
  constructor(private eleRef: ElementRef) {}

  ngOnInit() {
    this.eleRef.nativeElement.style.backgroundColor = 'green';
  }
}
