import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatButtonModule,
  MatInputModule,
  MatToolbarModule,
  MatPaginatorIntl,
  MatPaginatorModule,
  MatCardModule,
  MatIconModule,
  MatSnackBarModule,
  MAT_SNACK_BAR_DEFAULT_OPTIONS,
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
    MatCardModule,
    MatPaginatorModule,
    MatIconModule,
    MatSnackBarModule,
  ],
  providers: [
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlRu },
    { provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: { duration: 2500 } },
  ]
})
export class SharedModule { }
