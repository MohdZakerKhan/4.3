import { TestBed } from '@angular/core/testing';

import { lectureService } from './lecture.service';

describe('lectureService', () => {
  let service: lectureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(lectureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
