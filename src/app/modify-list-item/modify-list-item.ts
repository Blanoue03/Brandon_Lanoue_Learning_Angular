import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router, RouterLink, RouterLinkActive} from '@angular/router';
import {GameReview} from '../services/game-review';
import {Game} from '../models/game';
import {HighlightOnFocus} from '../directives/highlight-on-focus';

import {MatFormFieldModule} from '@angular/material/form-field';

import {MatInputModule} from '@angular/material/input';
import {TooltipPosition, MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    FormsModule,
    ReactiveFormsModule,
    HighlightOnFocus,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule
  ],
  templateUrl: './modify-list-item.html',
  styleUrl: './modify-list-item.css'
})
export class ModifyListItem implements OnInit{
    gameForm: FormGroup;
    game: Game | undefined;
    error: string | null = null;

    constructor(private fb: FormBuilder, private route: ActivatedRoute, private gameReview: GameReview, private router:Router) {

      this.gameForm = this.fb.group({
        id: ['', Validators.required],
        title: ['', Validators.required],
        genre: [''],
        creator: [''],
        yearReleased: [''],
        rating: [''],
        cost: [''],
        cover: ['']
      })

    }
    ngOnInit(): void
    {
      const id = this.route.snapshot.paramMap.get('id');
      if (id)
      {
        this.gameReview.getGameReviewById(+id).subscribe({
          next: game =>{
            if(game)
            {
             this.gameForm.patchValue(game)
            }
          },
          error: err => {
            this.error = 'Error fetching student';
            console.error('Error fetching student:', err);
          }
        });
      }
    }

    onsubmit(): void{
      const game: Game = this.gameForm.value;

      if(game.id)
      {
        this.gameReview.updateGameReview(game).subscribe(() =>this.router.navigate(['/Games']) )
      }
      else {
        const newID = this.gameReview.generateNewId()
        game.id = newID
        this.gameReview.addGameReview(game).subscribe(() =>this.router.navigate(['/Games']) )
      }


    }

    onDelete(): void{
      const id = this.gameForm.get('id')?.value;
      if(id){
        this.gameReview.deleteGameReview(id).subscribe(() => this.router.navigate(['/students']));

      }
    }


}
