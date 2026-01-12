import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { catchError, filter, map, Observable, retry, throwError, shareReplay, of } from 'rxjs';
import { Productstore } from './interfaces/product.interface';

const apiUrl = 'https://www.course-api.com/react-store-products';
@Injectable({
  providedIn: 'root',
})
export class ProductstoreService {
  private _httpClient = inject(HttpClient);
  private _productsCache$: Observable<Productstore[]> | null = null;

  private getAllProducts(): Observable<Productstore[]> {
    if (!this._productsCache$) {
      this._productsCache$ = this._httpClient.get<Productstore[]>(apiUrl).pipe(
        map((response) => {
          response.forEach((item) => {
            item.pid = `${item.company}-${item.price.toString().substring(0, 2)}`;
            item.checked = false;
          });
          return response.filter((item) => item.shipping === true);
        }),
        retry(3),
        shareReplay(1),
        catchError((error: HttpErrorResponse) => {
          this._productsCache$ = null; // Reset cache on error
          console.error('HTTP Error:', error.message);
          if (error.status === 404) {
            alert(error.message);
          }
          return throwError(() => new Error());
        })
      );
    }
    return this._productsCache$;
  }

  getProducts(companyname: string): Observable<Productstore[]> {
    return this.getAllProducts().pipe(
      map((products) => {
        console.log('Response Result::-', products);
        const filtered = products.filter((Company) => Company.company === companyname);
        console.log('Response Result after filter company::-', filtered);
        return filtered;
      })
    );
  }

  getProductById(id: string | null): Observable<Productstore> {
    return this.getAllProducts().pipe(
      map((products) => {
        const product = products.find(p => p.id === id);
        if (!product) {
          throw new Error(`Product with id ${id} not found`);
        }
        return product;
      }),
      catchError((error) => {
        console.error('Error fetching product:', error.message);
        return throwError(() => new Error(`Failed to fetch product: ${error.message}`));
      })
    );
  }
}
