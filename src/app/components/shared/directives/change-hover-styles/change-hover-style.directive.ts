import { Directive, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appChangeHoverStyle]'
})

export class ChangeHoverStyleDirective {

  constructor() { }

  @HostBinding('style.backgroundColor') hover: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.hover = 'rgb(223, 228, 234)';
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.hover = 'transparent';
  }
}
