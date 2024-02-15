import { Component, OnInit } from '@angular/core';
import { Hero } from '../../interface/heroes.interface';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { HeroesService } from '../heroes.service';
import { TranslateService } from '@ngx-translate/core'
import { take } from 'rxjs';

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

  constructor(
    private _heroesService: HeroesService,
    private router: Router,
    private confirmationService: ConfirmationService,
    private translate: TranslateService,
    private messageService: MessageService
  ) {}

  ngOnInit() {
    this._heroesService.getAllHeroes().subscribe({
      next: (heroes) => this.heroes = heroes,
      error: () => this.showError()
    });
  }

  filterHeroes(): Hero[] {
    return this.heroes.filter(hero => hero.name.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  confirmDelete(event: Event, hero: Hero): void {
    this.confirmationService.confirm({
        target: event.target as EventTarget,
        message: this.translate.instant('confirmDialog.messageDelete'),
        header: this.translate.instant('confirmDialog.confirm'),
        icon: 'pi pi-info-circle',
        acceptButtonStyleClass:"p-button-danger p-button-text",
        rejectButtonStyleClass:"p-button-text p-button-text",
        acceptIcon:"none",
        rejectIcon:"none",
        acceptLabel: this.translate.instant('confirmDialog.yes'),


        accept: () => {
          this._heroesService.deleteHeroById(hero.id)
            .subscribe(() => this._heroesService.getAllHeroes()
            .subscribe(heroes => this.heroes = heroes))
        }
    });
  }

  onPage(event: {first: number, rows: number}): void {
    this.rows = event.rows;
  }

  updateHero(id: number): void {
    this.router.navigate([`update/${id}`]);
  }

  showError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: this.translate.instant('errorBbdd') });
  }
}
