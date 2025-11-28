import { Component, OnInit} from '@angular/core';
import  {Game} from '../models/game'
import {GameListItem} from '../game-list-item/game-list-item';
import {GameReview} from '../services/game-review';
import {Router, RouterLink, RouterLinkActive} from '@angular/router';
import {ModifyListItem} from '../modify-list-item/modify-list-item';
import {CurrencyPipe, DatePipe, TitleCasePipe, } from '@angular/common';
import {RatingPipe} from '../pipes/rating-pipe'
import {HoverHighlight} from '../directives/hover-highlight';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButton} from '@angular/material/button';
import {MatList, MatListModule} from '@angular/material/list';



@Component({
  selector: 'app-game-list',
  imports: [
    GameListItem,
    RouterLink,
    RouterLinkActive,
    CurrencyPipe,
    TitleCasePipe,
    DatePipe,
    RatingPipe,
    HoverHighlight,
    MatGridListModule,
    MatProgressBarModule,
    MatButton,
    MatListModule
  ],
  templateUrl: './game-list.html',
  styleUrl: './game-list.css'
})





export class GameList  implements  OnInit{

  gameList: Game[] = []
  constructor(private GameReview: GameReview,  private router:Router)
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
    this.GameReview.deleteGameReview(id).subscribe(() => this.router.navigate(['/Games']));


  }

}
