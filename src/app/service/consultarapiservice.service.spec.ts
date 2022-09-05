import { TestBed } from '@angular/core/testing';

import { ConsultarapiService } from './consultarapi.service';

describe('ConsultarapiserviceService', () => {
  let service: ConsultarapiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarapiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
