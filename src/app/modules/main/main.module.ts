import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './page/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '@shared/shared.module';
import { ShortInfoVideoComponent } from './components/short-info-video/short-info-video.component';
import { FavoritesComponent } from './page/favorites/favorites.component';

@NgModule({
  declarations: [MainComponent, SearchComponent, ShortInfoVideoComponent, FavoritesComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MainRoutingModule
  ]
})
export class MainModule { }
