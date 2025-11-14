import { Injectable } from '@angular/core';
import { data} from '../Data/mock-content'
import { Observable, of } from 'rxjs';
import {Game} from '../models/game';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GameReview {

  private apiUrl = 'api/games'
  gameReviews : Game[] = data;
  constructor(private http: HttpClient) {
  }
  getGameReviews(): Observable<Game[]>
  {
    return this.http.get<Game[]>(this.apiUrl);
  }
  addGameReview(newGameReview:Game) : Observable<Game>{
    return this.http.post<Game>(this.apiUrl, newGameReview)
  }
  updateGameReview(updatedGameReview : Game) : Observable<Game | undefined>
  {
    const url = `${this.apiUrl}/${updatedGameReview.id}`
    return this.http.put<Game>(url,updatedGameReview)
  }
  deleteGameReview(gameID: number) : Observable<{}>
  {
    const url = `${this.apiUrl}/${gameID}`;
    return this.http.delete(url)
  }
  getGameReviewById(gameID: number) : Observable<Game> {
   return this.http.get<Game>(`${this.apiUrl}/${gameID}`);

  }

  generateNewId(): number {
    return this.gameReviews.length > 0 ? Math.max(...this.gameReviews.map(game => game.id)) + 1 : 1;
  }



}
