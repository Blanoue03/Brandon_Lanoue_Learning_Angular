import {Component, Input, OnInit} from '@angular/core';
import  {Game} from '../models/game'
import {ActivatedRoute, RouterLink, RouterLinkActive} from '@angular/router';
import {GameReview} from '../services/game-review';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-game-list-item',
  imports: [
    RouterLink,
    RouterLinkActive,
    NgIf
  ],
  templateUrl: './game-list-item.html',
  styleUrl: './game-list-item.css'
})
export class GameListItem implements OnInit{

  game: Game | undefined;

  constructor(private  route: ActivatedRoute, private gameReview: GameReview) {

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
      this.gameReview.deleteGameReview(this.game.id)
    }

  }


}
