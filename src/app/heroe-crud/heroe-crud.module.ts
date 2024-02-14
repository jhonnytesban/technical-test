import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeroComponent } from './table-hero/table-hero.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { AddHeroComponent } from './add-hero/add-hero.component';
import { RouterModule } from '@angular/router';
import { SkeletonModule } from 'primeng/skeleton';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ToastModule } from 'primeng/toast';
import { ConfirmationService } from 'primeng/api';



@NgModule({
  declarations: [
    TableHeroComponent,
    AddHeroComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule,
    ReactiveFormsModule,
    RouterModule,
    SkeletonModule,
    ConfirmDialogModule,
    ToastModule
  ],
  exports: [TableHeroComponent, AddHeroComponent],
  providers: [ConfirmationService]
})
export class HeroeCrudModule { }
