import { Component, OnInit} from '@angular/core';
import  {Game} from '../models/game'
import {GameListItem} from '../game-list-item/game-list-item';
import {GameReview} from '../services/game-review';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {ModifyListItem} from '../modify-list-item/modify-list-item';


@Component({
  selector: 'app-game-list',
  imports: [
    GameListItem,
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css'
})
export class GameList  implements  OnInit{

  gameList: Game[] = []
  constructor(private GameReview: GameReview)
  {

  }
  ngOnInit() {
      this.GameReview.getGameReviews().subscribe({
        next: (data: Game[]) => this.gameList = data,
        error:err => console.error("Error Fetching GameReviews", err),
        complete:() => console.log("Student data fetch complete!")
      })
  }
  delete(id : number)
  {
    this.GameReview.deleteGameReview(id)
    this.GameReview.getGameReviews().subscribe({
      next: (data: Game[]) => this.gameList = data,
      error:err => console.error("Error Fetching GameReviews", err),
      complete:() => console.log("Student data fetch complete!")
    })

  }

}
