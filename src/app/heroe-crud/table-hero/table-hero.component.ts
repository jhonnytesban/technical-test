import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/heroes.interface';
import { HeroesService } from '../../heroes.service';

@Component({
  selector: 'table-hero',
  templateUrl: './table-hero.component.html',
  styleUrl: './table-hero.component.scss'
})
export class TableHeroComponent implements OnInit {
  public heroes: Hero[] = [];
  public rowsPerPageOptions = [5, 10];
  public rows = 10;
  public searchTerm: string = '';

  constructor(private _heroesService: HeroesService) {}

  ngOnInit(): void {
    this._heroesService.getAllHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  filterHeroes() {
    return this.heroes.filter(hero =>
      hero.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  deleteHeroe(hero: Hero) {
    this._heroesService.deleteHeroById(hero.id)
      .subscribe(() => this._heroesService.getAllHeroes()
      .subscribe(heroes => this.heroes = heroes))
  }

  onPage(event: {first: number, rows: number}) {
    this.rows = event.rows;
  }   
}
