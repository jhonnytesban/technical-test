import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroComponent } from './heroe-crud/add-hero/add-hero.component';
import { TableHeroComponent } from './heroe-crud/table-hero/table-hero.component';

const routes: Routes = [
  {
    path: '',
    component: TableHeroComponent,
    pathMatch: 'full'
  },
  {
    path: 'create',
    component: AddHeroComponent
  },
  {
    path: 'update/:id',
    component: AddHeroComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
