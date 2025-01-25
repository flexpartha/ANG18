import { Component, inject, OnInit } from '@angular/core';
import { UserAddressService } from '../service/user-address.service';
import { Observable } from 'rxjs';
//import { Address } from '../../interfaces/useraddress.interface';
import { Address } from '../../interfaces/useraddress.type';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-address',
  standalone: true,
  imports: [CommonModule, AsyncPipe],
  templateUrl: './user-address.component.html',
  styleUrl: './user-address.component.scss',
})
export class UserAddressComponent implements OnInit {
  userAddress$!: Observable<Address[]>;

  userservice = inject(UserAddressService);

  ngOnInit(): void {
    this.userAddress$ = this.userservice.getAllUserType();
  }

  trackByIndex(index: number): number {
    return index;
  }
}
