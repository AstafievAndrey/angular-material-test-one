import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './page/main/main.component';
import { FavoritesComponent } from './page/favorites/favorites.component';

const routes: Routes = [
  {path: 'main', component: MainComponent},
  {path: 'favorites', component: FavoritesComponent},
  {path: '',   redirectTo: 'main', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
