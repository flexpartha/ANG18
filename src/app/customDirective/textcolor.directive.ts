import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appTextcolor]',
  standalone: true,
})
export class TextcolorDirective {
  constructor() {}

  @HostBinding('style.color') color: string = '#000';

  @HostListener('mouseover') mouseover() {
    this.color = '#ff9876';
  }

  @HostListener('mouseout') mouseout() {
    this.color = '#000';
  }
}
