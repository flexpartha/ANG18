import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-click-btn',
  standalone: true,
  imports: [NgClass],
  templateUrl: './click-btn.component.html',
  styleUrl: './click-btn.component.scss',
})
export class ClickBtnComponent {
  @Input() buttonClass: string | string[] = 'btn button';
  @Input() buttonLabel: string = '';
  @Output() searchEvt = new EventEmitter<string>();

  onSearch() {
    this.searchEvt.emit();
  }
}
