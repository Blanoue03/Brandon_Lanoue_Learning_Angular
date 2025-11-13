import { Injectable } from '@angular/core';
import { data} from '../Data/mock-content'
import { Observable, of } from 'rxjs';
import {Game} from '../models/game';

@Injectable({
  providedIn: 'root'
})
export class GameReview {

  gameReviews : Game[] = data;
  constructor() {
  }
  getGameReviews(): Observable<Game[]>
  {
    return of(this.gameReviews);
  }
  addGameReview(newGameReview:Game) : Observable<Game[]>{
    this.gameReviews.push(newGameReview);
    return of(this.gameReviews);
  }
  updateGameReview(updatedGameReview : Game) : Observable<Game[]>
  {
    const index = this.gameReviews.findIndex(review => review.id === updatedGameReview.id);
    if (index !== -1) {
      this.gameReviews[index] = updatedGameReview;
    }
    return of(this.gameReviews);
  }
  deleteGameReview(gameID: number) : Observable<Game[]>
  {
    this.gameReviews = this.gameReviews.filter(review => review.id !== gameID);
    return of(this.gameReviews);
  }
  getGameReviewById(gameID: number) : Observable<Game | undefined> {
    const review = this.gameReviews.find(game => game.id === gameID);
    return of(review);
  }



}
