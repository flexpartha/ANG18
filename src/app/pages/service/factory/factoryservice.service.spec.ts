import { TestBed } from '@angular/core/testing';

import { FactoryserviceService } from './factoryservice.service';

describe('FactoryserviceService', () => {
  let service: FactoryserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FactoryserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
