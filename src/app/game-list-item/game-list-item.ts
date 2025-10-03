import {Component, Input} from '@angular/core';
import  {Game} from '../models/game'

@Component({
  selector: 'app-game-list-item',
  imports: [],
  templateUrl: './game-list-item.html',
  styleUrl: './game-list-item.css'
})
export class GameListItem {

  @Input() game!:Game;

}
