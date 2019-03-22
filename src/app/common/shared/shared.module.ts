import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule, MatInputModule, MatToolbarModule } from '@angular/material';
import { LayoutsModule } from './layouts/layouts.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    LayoutsModule
  ]
})
export class SharedModule { }
