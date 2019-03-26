import { TestBed } from '@angular/core/testing';

import { MainModuleService } from './main-module.service';

describe('MainModuleService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MainModuleService = TestBed.get(MainModuleService);
    expect(service).toBeTruthy();
  });
});
