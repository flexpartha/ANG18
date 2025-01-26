import {
  ChangeDetectorRef,
  Component,
  Inject,
  inject,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import {
  FactoryserviceService,
  ROLE_BASED_SERVICE,
} from '../service/factory/factoryservice.service';
import { Observable } from 'rxjs';
import { Address } from '../../interfaces/useraddress.type';
import { UserAddressService } from '../service/user-address.service';
import { AsyncPipe, NgFor } from '@angular/common';

@Component({
  selector: 'app-admin-role',
  standalone: true,
  imports: [AsyncPipe, NgFor],
  templateUrl: './admin-role.component.html',
  styleUrl: './admin-role.component.scss',
})
export class AdminRoleComponent implements OnInit {
  message: string;

  #router = inject(Router);

  userAddress$!: Observable<Address[]>;

  userservice = inject(UserAddressService);
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

  ngOnInit(): void {
    this.userAddress$ = this.userservice.getAllUserType();
  }
  logout() {
    localStorage.removeItem('userRole');
    // this.#router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
    //   this.#router.navigate(['/login']); // Reloads the login route
    // });
    this.#router.navigate(['/login']);
  }

  trackByIndex(index: number): number {
    return index;
  }
}
