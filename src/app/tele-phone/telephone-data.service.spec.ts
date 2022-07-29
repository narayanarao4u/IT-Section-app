import { TestBed } from '@angular/core/testing';

import { TelephoneDataService } from './telephone-data.service';

describe('TelephoneDataService', () => {
  let service: TelephoneDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TelephoneDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
