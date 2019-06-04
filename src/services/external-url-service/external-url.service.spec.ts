import { TestBed } from '@angular/core/testing';

import { ExternalUrlService } from './external-url.service';

describe('ExternalUrlService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExternalUrlService = TestBed.get(ExternalUrlService);
    expect(service).toBeTruthy();
  });
});
