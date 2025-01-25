import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  getData(): string {
    return 'User Service: User data loaded.';
  }
}
