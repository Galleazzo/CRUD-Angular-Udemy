import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appRed]'
})
export class RedDirective {

  constructor(private el: ElementRef) { 
    el.nativeElement.style.color = '#3e35e6b'
  }
}
