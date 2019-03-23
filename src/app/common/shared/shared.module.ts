import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatPaginatorIntl,
  MatPaginatorModule
} from '@angular/material';

import { MatPaginatorIntlRu } from '@classes/mat-paginator-intl-ru';
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
    LayoutsModule,
    MatPaginatorModule
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlRu}
  ]
})
export class SharedModule { }
