import { TestBed } from '@angular/core/testing';

import { ServicioProgramasService } from './servicio-programas.service';

describe('ServicioProgramasService', () => {
  let service: ServicioProgramasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicioProgramasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
