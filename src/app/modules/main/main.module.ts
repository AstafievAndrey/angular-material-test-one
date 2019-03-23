import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './page/main/main.component';
import { SearchComponent } from './components/search/search.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [MainComponent, SearchComponent],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MainRoutingModule
  ]
})
export class MainModule { }
