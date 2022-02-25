import { TestBed } from '@angular/core/testing';

import { JalonService } from './jalon.service';

describe('JalonService', () => {
  let service: JalonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JalonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
