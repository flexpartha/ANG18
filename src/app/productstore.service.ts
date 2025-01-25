import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, filter, map, Observable, retry, throwError } from 'rxjs';
import { Productstore } from './interfaces/product.interface';

const apiUrl = 'https://www.course-api.com/react-store-products';
@Injectable({
  providedIn: 'root',
})
export class ProductstoreService {
  constructor(private _httpClient: HttpClient) {}

  getProducts(companyname: string): Observable<Productstore[]> {
    return this._httpClient.get<Productstore[]>(apiUrl).pipe(
      map((res) => {
        return res.filter((item) => item.shipping === true);
      }),
      map((response) => {
        //add and modifies incoming response with extra field like pid
        response.forEach((item) => {
          item.pid = `${item.company}-${item.price.toString().substring(0, 2)}`;
          item.checked = false;
        });
        console.log('Response Result::-', response);
        return response.filter((Company) => Company.company === companyname);
      }),
      retry(3),
      catchError((error: HttpErrorResponse) => {
        // Handle HTTP error response
        console.error('HTTP Error:', error.message);
        if (error.status === 404) {
          alert(error.message);
        }
        // You can decide to return a default value or rethrow the error
        return throwError(() => new Error());
      })
    );
  }
}
