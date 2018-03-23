import { TestBed, inject } from '@angular/core/testing';

import { GithubRequestService } from './github-request.service';

describe('GithubRequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubRequestService]
    });
  });

  it('should be created', inject([GithubRequestService], (service: GithubRequestService) => {
    expect(service).toBeTruthy();
  }));
});
