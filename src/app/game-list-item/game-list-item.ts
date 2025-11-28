import {Component, Input, OnInit} from '@angular/core';
import  {Game} from '../models/game'
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {GameReview} from '../services/game-review';
import {CurrencyPipe, DatePipe, NgIf, TitleCasePipe} from '@angular/common';
import {RatingPipe} from '../pipes/rating-pipe'
import {MatGridListModule} from '@angular/material/grid-list';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButton} from '@angular/material/button';
import {MatListModule} from '@angular/material/list';
import {HoverHighlight} from '../directives/hover-highlight';

@Component({
  selector: 'app-game-list-item',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf,
    TitleCasePipe,
    DatePipe,
    CurrencyPipe,
    RatingPipe,
    HoverHighlight,
    MatGridListModule,
    MatProgressBarModule,
    MatButton,
    MatListModule
  ],
  templateUrl: './game-list-item.html',
  styleUrl: './game-list-item.css'
})
export class GameListItem implements OnInit{

  game: Game | undefined;

  constructor(private  route: ActivatedRoute, private gameReview: GameReview,  private router:Router) {

  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id')
    if(id)
    {
      this.gameReview.getGameReviewById(Number(id)).subscribe(game =>{
        this.game = game;
      })
    }
  }
  delete()
  {
    if (this.game)
    {
      this.gameReview.deleteGameReview(this.game.id).subscribe(() => this.router.navigate(['/Games']));
    }

  }


}
