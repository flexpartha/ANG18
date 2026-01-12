import { Component, inject } from '@angular/core';
import { ProductstoreService } from '../../productstore.service';
import { Observable } from 'rxjs';
import { Productstore } from '../../interfaces/product.interface';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TextcolorDirective } from '../../customDirective/textcolor.directive';
import { ClickBtnComponent } from '../../Button/click-btn/click-btn.component';
import { ProductsComponent } from './custom-screen/products/products.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-productstore',
  standalone: true,
  imports: [AsyncPipe, FormsModule, ClickBtnComponent, ProductsComponent],
  templateUrl: './productstore.component.html',
  styleUrl: './productstore.component.scss',
  hostDirectives: [TextcolorDirective],
})
export class ProductstoreComponent {
  productList!: Observable<Productstore[]>;

  prodservice = inject(ProductstoreService);
  roter = inject(Router);

  companyName: string = '';

  getAlltheProductStore() {
    this.productList = this.prodservice.getProducts(this.companyName);
  }

  onProductClick(product: Productstore) {
    console.log('Product clicked:', product);
    this.roter.navigate(['/productdetails', product.id]);
  }
}
