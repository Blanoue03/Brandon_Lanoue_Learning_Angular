import { Component } from '@angular/core';
import {GameList} from "../game-list/game-list";
import {GameListItem} from "../game-list-item/game-list-item";

@Component({
  selector: 'app-page-not-found',
    imports: [
        GameList,
        GameListItem
    ],
  templateUrl: './page-not-found.html',
  styleUrl: './page-not-found.css'
})
export class PageNotFound {

}
