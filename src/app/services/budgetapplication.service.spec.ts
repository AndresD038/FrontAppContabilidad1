import { TestBed } from '@angular/core/testing';

import { BudgetapplicationService } from './budgetapplication.service';

describe('BudgetapplicationService', () => {
  let service: BudgetapplicationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetapplicationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
