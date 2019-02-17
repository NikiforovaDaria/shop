import { Directive, Input, ElementRef, Renderer2, HostListener } from '@angular/core';

@Directive({
  selector: '[appChangeFontSize]'
})
export class ChangeFontSizeDirective {

  @Input('appChangeFontSize') size: string;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  @HostListener('click', ['$event'])
  clicked() {
    this.fontSize(this.size || '40px');
  }

  private fontSize(size: string) {
    const { nativeElement } = this.el;
    this.renderer.setStyle(nativeElement, 'font-size', size);
  }
}
