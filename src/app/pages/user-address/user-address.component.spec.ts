import { ComponentFixture, flush, TestBed } from '@angular/core/testing';

import { UserAddressComponent } from './user-address.component';
import { UserAddressService } from '../service/user-address.service';
import { inject } from '@angular/core';
import { of } from 'rxjs';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';

fdescribe('UserAddressComponent', () => {
  let component: UserAddressComponent;
  let fixture: ComponentFixture<UserAddressComponent>;
  let service: UserAddressService;

  const mockAddress = [
    {
      street: 'Kulas Light',
      suite: 'Apt. 556',
      city: 'Gwenborough',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
  ];
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserAddressComponent],
      providers: [
        UserAddressService,
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(UserAddressComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(UserAddressService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return the address from json response', () => {
    expect(component.userAddress$).toBeTruthy();
  });

  it('should return the adrees from json response on onInit call', () => {
    // spyOn(service, 'getAllUserAddress').and.callFake(() => {
    //   return of(mockAddress);
    // });
    component.ngOnInit();
    //expect(service.getAllUserAddress).toHaveBeenCalled();
    component.userAddress$.subscribe((address) => {
      expect(address).toEqual(mockAddress);
    });
  });
});
