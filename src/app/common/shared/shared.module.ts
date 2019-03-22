import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatPaginatorIntl,
  MatPaginatorModule
} from '@angular/material';
import { LayoutsModule } from './layouts/layouts.module';
import { MatPaginatorIntlRu } from '@classes/mat-paginator-intl-ru';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatToolbarModule,
    LayoutsModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlRu}
  ]
})
export class SharedModule { }
