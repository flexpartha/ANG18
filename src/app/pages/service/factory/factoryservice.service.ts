import { Injectable, InjectionToken, Injector } from '@angular/core';
import { AdminService } from '../admin/admin.service';
import { UserService } from '../user/user.service';

export const ROLE_BASED_SERVICE = new InjectionToken<any>('ROLE_BASED_SERVICE');

@Injectable({
  providedIn: 'root',
})
export class FactoryserviceService {
  constructor(private injector: Injector) {}

  getService(): any {
    const userRole = localStorage.getItem('userRole');
    console.log('Dynamically resolving service for role:', userRole);
    return userRole === 'admin'
      ? this.injector.get(AdminService)
      : this.injector.get(UserService);
  }
}

export function roleBasedServiceFactory(injector: Injector): any {
  const userRole = localStorage.getItem('userRole'); // Get user role dynamically
  console.log('userRole', userRole);
  return userRole === 'admin'
    ? injector.get(AdminService)
    : injector.get(UserService);
}
