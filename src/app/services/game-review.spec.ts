import { TestBed } from '@angular/core/testing';

import { GameReview } from './game-review';

describe('GameReview', () => {
  let service: GameReview;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameReview);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
