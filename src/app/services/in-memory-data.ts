import { Injectable } from '@angular/core';
import {Game} from '../models/game';
import {DatePipe} from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class InMemoryData {

    createDb():{games: Game[]}
    {
        const games: Game[] = [{
          id: 1,
          title: 'The Legend of Zelda: Breath of the Wild',
          genre: 'Action-Adventure',
          creator: 'Nintendo',
          yearReleased: new Date("2017-03-04"),
          rating: 1,
          cost: 60.99,
          cover: "The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
        },
          {
            id: 2,
            title: 'Minecraft',
            genre: 'Sandbox',
            creator: 'Mojang',
            yearReleased: new Date("2009-05-18"),
            rating: 9.0,
            cost: 60.99,
            cover: "minecraft-1639513933156.jpg"
          },
          {
            id: 3,
            title: 'Half-Life 2',
            genre: 'First-Person Shooter',
            creator: 'Valve',
            yearReleased: new Date("2004-11-17"),
            rating: 9.7,
            cost: 60.99,
            cover: "Half-Life_2_cover.jpg"
          },
          {
            id: 4,
            title: 'Stardew Valley',
            genre: 'Simulation / RPG',
            creator: 'ConcernedApe',
            yearReleased: new Date("2016-02-27"),
            rating: 9.2,
            cost: 60.99,
            cover: "Logo_of_Stardew_Valley.png"
          },
          {
            id: 5,
            title: 'God of War',
            genre: 'Action',
            creator: 'Santa Monica Studio',
            yearReleased: new Date("2018-04-21"),
            rating: 9.5,
            cost: 60.99,
            cover: "God_of_War_4_cover.jpg"
          },
          {
            id: 6,
            title: 'Among Us',
            genre: 'Party / Social Deduction',
            creator: 'Innersloth',
            yearReleased: new Date("2018-06-15"),
            rating: 3.2,
            cost: 60.99,
            cover: "Among_Us_cover_art.jpg"
          }]
        return {games};
    }
}
