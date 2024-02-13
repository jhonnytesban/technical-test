import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import { Hero } from './interface/heroes.interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public heroes: Hero[] = [];
  public newHero!: Hero;
  public displayAddHeroModal: boolean = false;

  heroForm!: FormGroup;

  constructor(private fb: FormBuilder, private _heroesService: HeroesService) {}

  ngOnInit(): void {
    this.initializeForm();
  }

  private initializeForm() {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(0)]],
      creator: ['', Validators.required],
      curiosity: ['']
    });
  }

  showAddHeroModal() {
    this.displayAddHeroModal = true;
  }

  addNewHero() {
    this._heroesService.addNewHero(this.heroForm.getRawValue())
      .subscribe(res => {
        this._heroesService.getAllHeroes()
        .subscribe(heroes => this.heroes = heroes)
      });
    this.heroForm.reset();
    this.displayAddHeroModal = false;
  }

  updateHero() {

  }
}
