import { Component, inject } from '@angular/core';
import { ProductstoreService } from '../../productstore.service';
import { Observable } from 'rxjs';
import { Productstore } from '../../interfaces/product.interface';
import { AsyncPipe, NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextcolorDirective } from '../../customDirective/textcolor.directive';

@Component({
  selector: 'app-productstore',
  standalone: true,
  imports: [AsyncPipe, NgFor, FormsModule],
  templateUrl: './productstore.component.html',
  styleUrl: './productstore.component.scss',
  hostDirectives: [TextcolorDirective],
})
export class ProductstoreComponent {
  productList!: Observable<Productstore[]>;

  prodservice = inject(ProductstoreService);

  companyName: string = '';

  getAlltheProductStore() {
    this.productList = this.prodservice.getProducts(this.companyName);
  }
}
