import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrl: './add-hero.component.scss'
})
export class AddHeroComponent implements OnInit{
  public heroForm!: FormGroup;
  public heroId!: number;

  constructor(
      private fb: FormBuilder,
      private _heroesService: HeroesService,
      private router: Router,
      private route: ActivatedRoute,
    ) {}

  ngOnInit(): void {
    this.heroId = this.route.snapshot.params['id'];
    this.initializeForm();

    if (this.heroId) {
      this._heroesService.getHeroeById(this.heroId).subscribe(hero => {
        this.heroForm.patchValue(hero)
      });
    }
  }

  private initializeForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      creator: ['', Validators.required],
      curiosity: ['']
    });
  }

  addNewHero() {
    if (this.heroId) {
      this._heroesService.updateHero(this.heroId, this.heroForm.getRawValue()).subscribe();
    } else {
      this._heroesService.addNewHero(this.heroForm.getRawValue()).subscribe();
    }
    this.heroForm.reset();
    this.router.navigateByUrl('/');
  }
  
  backToList() {
    this.router.navigateByUrl('/');
  }
}
