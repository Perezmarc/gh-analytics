import { TestBed, inject } from '@angular/core/testing';

import { SearchRepoService } from './search-repo.service';

describe('SearchRepoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchRepoService]
    });
  });

  it('should be created', inject([SearchRepoService], (service: SearchRepoService) => {
    expect(service).toBeTruthy();
  }));
});
