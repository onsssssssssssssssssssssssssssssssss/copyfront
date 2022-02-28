import { TestBed } from '@angular/core/testing';

import {siteService } from './site.service';

describe('SiteService', () => {
  let service: siteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(siteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
