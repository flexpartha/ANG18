import { Component, inject, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { Productstore } from '../../../interfaces/product.interface';
import { ProductstoreService } from '../../../productstore.service';
import { AsyncPipe } from '@angular/common';
import { ProductsComponent } from '../custom-screen/products/products.component';

@Component({
  selector: 'app-productdetails',
  standalone: true,
  imports: [AsyncPipe, ProductsComponent],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductdetailsComponent implements OnInit {
  productsdetails$: Observable<Productstore> | undefined;
  prodservice = inject(ProductstoreService);
  activatedRoute = inject(ActivatedRoute);
  ngOnInit(): void {
    this.productsdetails$ = this.activatedRoute.paramMap.pipe(
      switchMap((params) => {
        const id = params.get('id');
        return this.prodservice.getProductById(id);
      }),
    );
  }
}
