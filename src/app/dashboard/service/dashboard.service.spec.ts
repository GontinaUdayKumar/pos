import { TestBed, getTestBed } from '@angular/core/testing';

import { DashboardService } from './dashboard.service';

fdescribe('DashboardService', () => {
  let injector: TestBed;
  let service: DashboardService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DashboardService],
    });
    injector = getTestBed();
    service = injector.get(DashboardService);
  });

  it('should create DashboardService', () => {
    expect(service).toBeTruthy();
  });
});
