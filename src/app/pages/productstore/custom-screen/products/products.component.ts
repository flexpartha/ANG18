import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgClass],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss',
})
export class ProductsComponent {
  @Input() picClass: string | string[] = 'pic-icon';
  @Input() productName: string = '';
  @Input() productPrice: number = 0;
  @Input() productImage: string = '';
  @Input() productDescription?: string = '';
  @Input() productCompany?: string = '';
  @Input() showDescription: boolean = true;
  @Input() showCompany: boolean = true;
}
