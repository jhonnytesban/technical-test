import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroesService } from '../heroes.service';
import { TranslateService } from '@ngx-translate/core';
import { ConfirmationService } from 'primeng/api';

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
      private translate: TranslateService,
      private confirmationService: ConfirmationService,
    ) {}

  ngOnInit() {
    this.heroId = this.route.snapshot.params['id'];
    this.initializeForm();

    if (this.heroId) {
      this._heroesService.getHeroeById(this.heroId)
      .subscribe({
        next: (hero) => this.heroForm.patchValue(hero),
        error: () => {
          this.confirmationService.confirm({
            message: this.translate.instant('confirmDialog.messageError'),
            header: this.translate.instant('confirmDialog.confirm'),
            icon: 'pi pi-info-circle',
            acceptButtonStyleClass:"p-button-danger p-button-text",
            rejectButtonStyleClass:"p-button-text p-button-text",
            acceptIcon:"none",
            rejectIcon:"none",
            acceptLabel: this.translate.instant('confirmDialog.yes'),
            rejectVisible: false,
    
            accept: () => {
              this.router.navigateByUrl('/');
            }
        });
        }

      });
    }
  }

  private initializeForm(): void {
    this.heroForm = this.fb.group({
      name: ['', Validators.required],
      age: ['', [Validators.required, Validators.min(1)]],
      creator: ['', Validators.required],
      curiosity: ['']
    });
  }

  addNewHero(): void {
    if (this.heroId) {
      this._heroesService.updateHero(this.heroId, this.heroForm.getRawValue()).subscribe();
    } else {
      this._heroesService.addNewHero(this.heroForm.getRawValue()).subscribe();
    }
    this.heroForm.reset();
    this.router.navigateByUrl('/');
  }
  
  backToList(): void {
    this.router.navigateByUrl('/');
  }
}
