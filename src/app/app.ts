import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import  {Game} from './models/game'
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('untitled');
  gameList: Game[] = [{
      id:1,
      title: 'The Legend of Zelda: Breath of the Wild',
      genre: 'Action-Adventure',
      creator: 'Nintendo',
      yearReleased: '2017',
      rating: 1
    },
    {
      id:2,
      title: 'Minecraft',
      genre: 'Sandbox',
      creator: 'Mojang',
      yearReleased: '2011',
      rating: 9.0
    },
    {
      id:3,
      title: 'Half-Life 2',
      genre: 'First-Person Shooter',
      creator: 'Valve',
      yearReleased: '2004',
      rating: 9.7
    },
    {
      id:4,
      title: 'Stardew Valley',
      genre: 'Simulation / RPG',
      creator: 'ConcernedApe',
      yearReleased: '2016',
      rating: 9.2
    },
    {
      id:5,
      title: 'God of War',
      genre: 'Action',
      creator: 'Santa Monica Studio',
      yearReleased: '2018',
      rating: 9.5
    },
    {
      id:6,
      title: 'Among Us',
      genre: 'Party / Social Deduction',
      creator: 'Innersloth',
      yearReleased: '2018',
      rating: 3.2
    }]
}

