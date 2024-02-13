import { Component, OnInit } from '@angular/core';
import { HeroesService } from './heroes.service';
import { Hero } from './interface/heroes.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  public heroes: Hero[] = [];
  rowsPerPageOptions = [5, 10];
  rows = 10;
  searchTerm: string = '';

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {
    this._heroesService.getAllHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  deleteHeroe(hero: Hero) {
    this._heroesService.deleteHeroById(hero.id)
      .subscribe(() => this._heroesService.getAllHeroes()
      .subscribe(heroes => this.heroes = heroes))
  }

  filterHeroes() {
    return this.heroes.filter(hero =>
      hero.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onPage(event: any) {
    console.log('EVENT', event)
    this.rows = event.rows;
  }
}
