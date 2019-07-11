import { TestBed } from '@angular/core/testing';

import { GithubFollowersServicesService } from './github-followers-services.service';

describe('GithubFollowersServicesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GithubFollowersServicesService = TestBed.get(GithubFollowersServicesService);
    expect(service).toBeTruthy();
  });
});
