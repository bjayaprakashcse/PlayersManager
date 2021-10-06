import { TestBed } from '@angular/core/testing';

import { CreatescreenService } from './createscreen.service';

describe('CreatescreenService', () => {
  let service: CreatescreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreatescreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
