import { TestBed } from '@angular/core/testing';

import { DevHeaderService } from './dev-header.service';

describe('DevHeaderService', () => {
  let service: DevHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DevHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
