import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  Renderer2,
  ViewChild,
  inject,
  PLATFORM_ID,
} from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ClickBtnComponent } from './Button/click-btn/click-btn.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ClickBtnComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements AfterViewInit {
  private render = inject(Renderer2);
  private platformId = inject(PLATFORM_ID);

  addComponent() {
    throw new Error('Method not implemented.');
  }
  title = 'ag18';

  @ViewChild('parentDiv') parentDiv: ElementRef | undefined;
  @ViewChild('childPara') childPara: ElementRef | undefined;
  @ViewChild('container') container!: ElementRef;
  @ViewChild('div') div!: ElementRef;
  @ViewChild('inputDv') inputDv!: ElementRef;
  @ViewChild('inputTxt') inputTxt!: ElementRef;

  ngAfterViewInit() {
    if (!isPlatformBrowser(this.platformId)) return;

    if (this.childPara?.nativeElement && this.parentDiv?.nativeElement) {
      this.render.setStyle(this.childPara.nativeElement, 'color', 'red');
    }

    if (this.inputDv?.nativeElement && this.inputTxt?.nativeElement) {
      this.render.removeChild(this.inputDv.nativeElement, this.inputTxt.nativeElement);
    }
  }
  removeChild() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.childPara?.nativeElement && this.parentDiv?.nativeElement) {
      this.render.removeChild(this.parentDiv.nativeElement, this.childPara.nativeElement);
    }
  }

  addElement() {
    if (!isPlatformBrowser(this.platformId)) return;
    this.div = this.render.createElement('div');
    const text = this.render.createText('This is a new paragraph added dynamically.');
    this.render.appendChild(this.div, text);
    this.render.setStyle(this.div, 'padding', '10px');
    this.render.setStyle(this.div, 'background', '#d1e7dd');
    this.render.setStyle(this.div, 'marginTop', '10px');
    this.render.addClass(this.div, 'borderRadius');
    this.render.appendChild(this.container.nativeElement, this.div);
  }

  removeElement() {
    if (!isPlatformBrowser(this.platformId)) return;
    if (this.container?.nativeElement && this.div) {
      this.render.removeChild(this.container.nativeElement, this.div);
    }
  }
}
