import { TestBed, inject } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';

import { FetchService } from './fetch.service';

describe('FetchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [FetchService]
    });
  });

  it('should be created', inject([FetchService], (service: FetchService) => {
    expect(service).toBeTruthy();
  }));
});
