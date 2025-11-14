import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { App } from './app/app';
import { PreloadAllModules} from '@angular/router';
import { provideRouter, Routes } from
    '@angular/router';
import {GameList} from './app/game-list/game-list';
import {GameListItem} from './app/game-list-item/game-list-item';
import {ModifyListItem} from './app/modify-list-item/modify-list-item';
import {PageNotFound} from './app/page-not-found/page-not-found';
import {provideHttpClient, withInterceptorsFromDi} from '@angular/common/http';
import {importProvidersFrom} from '@angular/core';
import {HttpClientInMemoryWebApiModule} from 'angular-in-memory-web-api';
import {InMemoryData} from './app/services/in-memory-data';

const routes: Routes = [
  { path:'', redirectTo: '/Games', pathMatch: 'full'},
  { path: 'Games', component: GameList },
  { path: 'Games/:id', loadComponent: () => import('./app/game-list-item/game-list-item').then(m => m.GameListItem) },
  { path: 'Modify-Review', loadComponent: () => import('./app/modify-list-item/modify-list-item').then(m => m.ModifyListItem)},
  { path: 'Modify-Review/:id', loadComponent: () => import('./app/modify-list-item/modify-list-item').then(m => m.ModifyListItem)},
  { path: '**', loadComponent: () => import('./app/page-not-found/page-not-found').then(m => m.PageNotFound)}
];

bootstrapApplication(App, {
  providers: [provideRouter(routes), provideHttpClient(withInterceptorsFromDi()), importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryData, {delay: 1000})) ]
}).catch((err)=> console.error(err));
