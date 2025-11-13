import { Injectable } from '@angular/core';
import { data} from '../Data/mock-content'
import { Observable, of } from 'rxjs';
import {Game} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameReview {
  constructor() {
  }
  getGameReviews(): Observable<Game[]>
  {
    return of(data);
  }


}
