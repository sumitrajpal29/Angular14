import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { BooksService } from './books.service';



@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit {
  nameOfDeveloper: string = "sumitrajpal";
  isHidden: boolean = true;

  constructor() { }

  bookService = new BooksService();
  books: Book[] = this.bookService.books;

  ngOnInit(): void {
  }

  cart: Book[] = [];

  addToCart(book: Book) {
    this.cart.push(book);

    //logging the last book name in cart:
    console.log(this.cart[this.cart.length - 1].name);

  }

}
