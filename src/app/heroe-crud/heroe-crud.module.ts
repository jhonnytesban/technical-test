import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableHeroComponent } from './table-hero/table-hero.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';



@NgModule({
  declarations: [
    TableHeroComponent
  ],
  imports: [
    CommonModule,
    TableModule,
    ButtonModule,
    FormsModule,
    InputTextModule
  ],
  exports: [TableHeroComponent]
})
export class HeroeCrudModule { }
