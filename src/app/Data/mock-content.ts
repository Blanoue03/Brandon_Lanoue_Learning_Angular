import {Game} from "../models/game"

export const data: Game[] = [
    {
      id:1,
      title: 'The Legend of Zelda: Breath of the Wild',
      genre: 'Action-Adventure',
      creator: 'Nintendo',
      yearReleased: new Date("2017-03-03"),
      rating: 1,
      cost: 60.99,
      cover: "The_Legend_of_Zelda_Breath_of_the_Wild.jpg"
    },
    {
      id:2,
      title: 'Minecraft',
      genre: 'Sandbox',
      creator: 'Mojang',
      yearReleased: new Date("2017-03-03"),
      rating: 9.0,
      cost: 60.99,
      cover: "minecraft-1639513933156.jpg"
    },
    {
      id:3,
      title: 'Half-Life 2',
      genre: 'First-Person Shooter',
      creator: 'Valve',
      yearReleased:new Date("2017-03-03"),
      rating: 9.7,
      cost: 60.99,
      cover: "Half-Life_2_cover.jpg"
    },
    {
      id:4,
      title: 'Stardew Valley',
      genre: 'Simulation / RPG',
      creator: 'ConcernedApe',
      yearReleased: new Date("2017-03-03"),
      rating: 9.2,
      cost: 60.99,
      cover: "Logo_of_Stardew_Valley.png"
    },
    {
      id:5,
      title: 'God of War',
      genre: 'Action',
      creator: 'Santa Monica Studio',
      yearReleased: new Date("2017-03-03"),
      rating: 9.5,
      cost: 60.99,
      cover: "God_of_War_4_cover.jpg"
    },
    {
      id:6,
      title: 'Among Us',
      genre: 'Party / Social Deduction',
      creator: 'Innersloth',
      yearReleased: new Date("2017-03-03"),
      rating: 3.2,
      cost: 60.99,
      cover: "Among_Us_cover_art.jpg"
    }]

