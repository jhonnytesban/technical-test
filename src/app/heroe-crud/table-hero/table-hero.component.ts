import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/heroes.interface';
import { HeroesService } from '../../heroes.service';
import { Router } from '@angular/router';
import { ConfirmationService } from 'primeng/api';

@Component({
  selector: 'table-hero',
  templateUrl: './table-hero.component.html',
  styleUrl: './table-hero.component.scss'
})
export class TableHeroComponent implements OnInit {
  public heroes: Hero[] = [];
  public rowsPerPageOptions = [5, 10];
  public rows = 5;
  public searchTerm: string = '';

  constructor(private _heroesService: HeroesService, private router: Router, private confirmationService: ConfirmationService) {}

  ngOnInit(): void {
    this._heroesService.getAllHeroes().subscribe(heroes => this.heroes = heroes);
  }

  filterHeroes() {
    return this.heroes.filter(hero => hero.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  confirmDelete(event: Event, hero: Hero) {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: '¿Quieres eliminar este héroe?',
        header: 'Comfirmar',
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",

        accept: () => {
          this._heroesService.deleteHeroById(hero.id)
            .subscribe(() => this._heroesService.getAllHeroes()
            .subscribe(heroes => this.heroes = heroes))
        }
    });
}

  onPage(event: {first: number, rows: number}) {
    this.rows = event.rows;
  }

  updateHero(id: number) {
    this.router.navigate([`update/${id}`]);
  }
}
