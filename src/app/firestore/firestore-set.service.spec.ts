import { TestBed } from '@angular/core/testing';

import { FirestoreSetService } from './firestore-set.service';

describe('FirestoreSetService', () => {
  let service: FirestoreSetService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FirestoreSetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
