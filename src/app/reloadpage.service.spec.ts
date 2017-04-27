import { TestBed, inject } from '@angular/core/testing';

import { ReloadpageService } from './reloadpage.service';

describe('ReloadpageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ReloadpageService]
    });
  });

  it('should ...', inject([ReloadpageService], (service: ReloadpageService) => {
    expect(service).toBeTruthy();
  }));
});
