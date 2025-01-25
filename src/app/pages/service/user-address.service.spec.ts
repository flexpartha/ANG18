import { TestBed } from '@angular/core/testing';

import { UserAddressService } from './user-address.service';
import {
  HttpTestingController,
  provideHttpClientTesting,
} from '@angular/common/http/testing';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { Address, UserAddress } from '../../interfaces/useraddress.interface';

fdescribe('UserAddressService', () => {
  let service: UserAddressService;
  let httpTestingController: HttpTestingController;
  const apiUrl = 'https://jsonplaceholder.typicode.com/users';
  const mockUserAddress: UserAddress[] = [
    {
      id: 1,
      name: 'Leanne Graham',
      username: 'Bret',
      email: 'Sincere@april.biz',
      address: {
        street: 'Kulas Light',
        suite: 'Apt. 556',
        city: 'Gwenborough',
        zipcode: '92998-3874',
        geo: {
          lat: '-37.3159',
          lng: '81.1496',
        },
      },
      phone: '1-770-736-8031 x56442',
      website: 'hildegard.org',
      company: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    },
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        UserAddressService,
        provideHttpClient(withFetch()),
        provideHttpClientTesting(),
      ],
    });
    service = TestBed.inject(UserAddressService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpTestingController.verify();
  });
  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return the adrees from json response', () => {
    service.getAllUserAddress().subscribe((address: Address[]) => {
      expect(address).toEqual(
        mockUserAddress.map((userAddress) => userAddress.address)
      );
    });

    const req = httpTestingController.expectOne(apiUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockUserAddress);
  });
});
