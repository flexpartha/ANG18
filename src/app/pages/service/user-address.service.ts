import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, filter, map, Observable, throwError } from 'rxjs';
import { UserAddress, Address } from '../../interfaces/useraddress.interface';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class UserAddressService {
  private _httClient = inject(HttpClient);
  //constructor(private _httClient: HttpClient) {}

  getAllUserAddress(): Observable<Address[]> {
    return this._httClient.get<UserAddress[]>(apiUrl).pipe(
      map((response) => {
        return response.map((userAddress) => userAddress.address);
      }),
      filter((address) => address.length > 0),
      catchError((error: any) => {
        console.log(error);
        return throwError(() => new Error(error));
      })
    );
  }
}
