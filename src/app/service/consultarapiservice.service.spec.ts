import { TestBed } from '@angular/core/testing';

import { ConsultarapiserviceService } from './consultarapiservice.service';

describe('ConsultarapiserviceService', () => {
  let service: ConsultarapiserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ConsultarapiserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
