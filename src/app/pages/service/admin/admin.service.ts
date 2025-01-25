import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  constructor() {}

  getData(): string {
    return 'Admin Service: Admin data loaded.';
  }
}
