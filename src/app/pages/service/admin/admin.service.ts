import { inject, Injectable } from '@angular/core';
import { catchError, filter, map, Observable, throwError } from 'rxjs';
import { Address } from '../../../interfaces/useraddress.type';
import { UserAddress } from '../../../interfaces/useraddress.interface';
import { HttpClient } from '@angular/common/http';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private _httClient = inject(HttpClient);
  constructor() {}

  getData(): string {
    return 'Admin Service: Admin data loaded.';
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
