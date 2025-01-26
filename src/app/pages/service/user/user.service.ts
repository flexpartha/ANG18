import { inject, Injectable } from '@angular/core';
import { catchError, filter, map, Observable, throwError } from 'rxjs';
import { Address, UserAddress } from '../../../interfaces/useraddress.type';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _httClient = inject(HttpClient);
  constructor() {}

  getData(): string {
    return 'User Service: User data loaded.';
  }

  getAllUserType(): Observable<Address[]> {
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
