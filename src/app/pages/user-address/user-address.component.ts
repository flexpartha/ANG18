import { Component, inject, OnInit } from '@angular/core';
import { UserAddressService } from '../service/user-address.service';
import { Observable, switchMap } from 'rxjs';
//import { Address } from '../../interfaces/useraddress.interface';
import { Address } from '../../interfaces/useraddress.type';
import { AsyncPipe, CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { UserAddress } from '../../interfaces/useraddress.interface';

@Component({
  selector: 'app-user-address',
  standalone: true,
  imports: [CommonModule, AsyncPipe, ReactiveFormsModule],
  templateUrl: './user-address.component.html',
  styleUrl: './user-address.component.scss',
})
export class UserAddressComponent implements OnInit {
  userAddress$!: Observable<Address[]>;
  user$: Observable<UserAddress> | undefined;
  allUsers$: Observable<UserAddress[]> | undefined;
  userIdControl = new FormControl(1);

  userservice = inject(UserAddressService);

  ngOnInit(): void {
    this.userAddress$ = this.userservice.getAllUserType();
    this.allUsers$ = this.userservice.getAllUsers();
    this.user$ = this.userIdControl.valueChanges.pipe(
      switchMap((id) => this.userservice.getUserById(id as number))
    );
  }

  trackByIndex(index: number): number {
    return index;
  }
}
