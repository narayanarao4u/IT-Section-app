import { TestBed } from '@angular/core/testing';

import { ItAssetDataService } from './ItAssestdata.service';

describe('DataService', () => {
  let service: ItAssetDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ItAssetDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
