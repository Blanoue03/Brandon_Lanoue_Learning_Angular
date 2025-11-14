import { Pipe, PipeTransform } from '@angular/core';
import {Game} from '../models/game';

@Pipe({
  name: 'rating',
})
export class RatingPipe implements PipeTransform {

  transform(game: Game): string {
    return `${game.rating} / 10`
  }

}
