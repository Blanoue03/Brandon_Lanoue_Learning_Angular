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
  getGameReviewById(gameID: number) : Observable<Game> {
    const review  = this.gameReviews.find(game => game.id === gameID);
    if(!review)
    {
      const badGame: Game = {
        id: -1,
        title: "Could not find game",
        genre: "Could not find game",
        creator: "Could not find game",
        yearReleased: "Could not find game",
        rating: -99
      }
      return of(badGame)
    }
    else
    {
      return of(review);
    }

  }

  generateNewId(): number {
    return this.gameReviews.length > 0 ? Math.max(...this.gameReviews.map(game => game.id)) + 1 : 1;
  }



}
