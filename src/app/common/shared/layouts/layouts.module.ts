import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { MatToolbarModule } from '@angular/material';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, MainComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule
  ],
  exports: [
    MainComponent
  ]
})
export class LayoutsModule { }
