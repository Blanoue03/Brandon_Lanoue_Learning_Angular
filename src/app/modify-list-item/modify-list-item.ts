import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {GameReview} from '../services/game-review';
import {Game} from '../models/game';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './modify-list-item.html',
  styleUrl: './modify-list-item.css'
})
export class ModifyListItem implements OnInit{
    gameForm: FormGroup;
    game: Game | undefined;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private gameReview: GameReview, private router:Router) {

      this.gameForm = this.fb.group({
        id: ['', Validators.required],
        title: ['', Validators.required],
        genre: [''],
        creator: [''],
        yearReleased: [''],
        rating: [''],
        cover: ['']
      })

    }
    ngOnInit(): void {
      const id = this.route.snapshot.paramMap.get('id');
      if (id)
      {
        this.gameReview.getGameReviewById(+id).subscribe(game =>{
          if (game)
          {
            this.game = game;
            this.gameForm.patchValue(game);
          }
        });
      }
    }
    onsubmit(): void{
      const game: Game = this.gameForm.value;

      if(game.id)
      {
        this.gameReview.updateGameReview(game)
      }
      else {
        const newID = this.gameReview.generateNewId();
        game.id = newID
        this.gameReview.addGameReview(game)
      }
      this.router.navigate(['/Games'])

    }

    onDelete(): void{
      const id = this.gameForm.get('id')?.value;
      if(id){
        this.gameReview.deleteGameReview(id)
        this.router.navigate(['/Games'])
      }
    }


}
