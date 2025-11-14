import { Component, signal, OnInit } from '@angular/core';
import {RouterLink, RouterLinkActive, RouterOutlet} from '@angular/router';
import  {Game} from './models/game'
import {NgForOf} from '@angular/common';
import {GameList} from './game-list/game-list';
import {GameListItem} from './game-list-item/game-list-item';
import {GameReview} from './services/game-review';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, GameList, GameListItem, RouterLinkActive, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App implements OnInit{
  protected readonly title = signal('untitled');
  game : Game = {
    id: -1,
    title: "Could not find game",
    genre: "Could not find game",
    creator: "Could not find game",
    yearReleased: "Could not find game",
    rating: -99
  }

  constructor(private GameReview: GameReview) {
  }
  ngOnInit() {
    this.GameReview.getGameReviewById(3).subscribe({
      next: (data: Game) => this.game = data,
      error:err => console.error("Error Fetching GameReviews", err),
      complete:() => console.log("Student data fetch complete!")
    })
  }

}

