import { TestBed } from '@angular/core/testing';

import { MyfavorteService } from './myfavorte.service';

describe('MyfavorteService', () => {
  let service: MyfavorteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyfavorteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
