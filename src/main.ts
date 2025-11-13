import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { provideRouter, Routes } from
    '@angular/router';
import {GameList} from './app/game-list/game-list';
import {GameListItem} from './app/game-list-item/game-list-item';

const routes: Routes = [
  { path: 'Games', component: GameList },
  { path: 'Games/:id', component: GameListItem
  }
];

bootstrapApplication(App, {
  providers: [provideRouter(routes)]
});
