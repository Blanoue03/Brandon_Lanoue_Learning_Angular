import { Injectable } from '@angular/core';
import {Game} from '../models/game';

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
          yearReleased: '2017',
          rating: 1,
          cover: "The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
        },
          {
            id: 2,
            title: 'Minecraft',
            genre: 'Sandbox',
            creator: 'Mojang',
            yearReleased: '2011',
            rating: 9.0,
            cover: "minecraft-1639513933156.jpg"
          },
          {
            id: 3,
            title: 'Half-Life 2',
            genre: 'First-Person Shooter',
            creator: 'Valve',
            yearReleased: '2004',
            rating: 9.7,
            cover: "Half-Life_2_cover.jpg"
          },
          {
            id: 4,
            title: 'Stardew Valley',
            genre: 'Simulation / RPG',
            creator: 'ConcernedApe',
            yearReleased: '2016',
            rating: 9.2,
            cover: "Logo_of_Stardew_Valley.png"
          },
          {
            id: 5,
            title: 'God of War',
            genre: 'Action',
            creator: 'Santa Monica Studio',
            yearReleased: '2018',
            rating: 9.5,
            cover: "God_of_War_4_cover.jpg"
          },
          {
            id: 6,
            title: 'Among Us',
            genre: 'Party / Social Deduction',
            creator: 'Innersloth',
            yearReleased: '2018',
            rating: 3.2,
            cover: "Among_Us_cover_art.jpg"
          }]
        return {games};
    }
}
