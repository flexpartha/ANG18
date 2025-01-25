import { ChangeDetectorRef, Component, Inject, inject } from '@angular/core';
import { Router } from '@angular/router';
import {
  FactoryserviceService,
  ROLE_BASED_SERVICE,
} from '../service/factory/factoryservice.service';

@Component({
  selector: 'app-user-role',
  standalone: true,
  imports: [],
  templateUrl: './user-role.component.html',
  styleUrl: './user-role.component.scss',
})
export class UserRoleComponent {
  #router = inject(Router);
  message: string;

  // constructor(
  //   @Inject(ROLE_BASED_SERVICE) private roleBasedService: any
  // ) //private cdr: ChangeDetectorRef
  // {
  //   this.message = this.roleBasedService.getData();
  //   //this.cdr.detectChanges();
  // }
  constructor(private roleBasedService: FactoryserviceService) {
    const service = this.roleBasedService.getService();
    this.message = service.getData();
  }

  logout() {
    localStorage.removeItem('userRole');
    // this.#router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   this.#router.navigate(['/login']); // Reloads the login route
    // });
    this.#router.navigate(['/login']);
  }
}
