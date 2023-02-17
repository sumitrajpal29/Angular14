import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookComponent } from '../book/book.component';
import { CartComponent } from '../cart/cart.component';



@NgModule({
  declarations: [BooksComponent, BookComponent],
  imports: [
    CommonModule,
  ],
  exports: [
    BooksComponent,
  ]
})
export class BooksModule { }
