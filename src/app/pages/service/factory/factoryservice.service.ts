import { inject, Injectable, InjectionToken, Injector, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { AdminService } from '../admin/admin.service';
import { UserService } from '../user/user.service';

export const ROLE_BASED_SERVICE = new InjectionToken<any>('ROLE_BASED_SERVICE');

@Injectable({
  providedIn: 'root',
})
export class FactoryserviceService {
  private injector = inject(Injector);
  private platformId = inject(PLATFORM_ID);

  getService(): any {
    let userRole = null;
    if (isPlatformBrowser(this.platformId)) {
      userRole = localStorage.getItem('userRole');
    }
    console.log('Dynamically resolving service for role:', userRole);
    return userRole === 'admin' ? this.injector.get(AdminService) : this.injector.get(UserService);
  }
}

export function roleBasedServiceFactory(injector: Injector): any {
  const platformId = injector.get(PLATFORM_ID);
  let userRole = null;
  
  if (isPlatformBrowser(platformId)) {
    userRole = localStorage.getItem('userRole');
  }
  
  console.log('userRole', userRole);
  return userRole === 'admin' ? injector.get(AdminService) : injector.get(UserService);
}
