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
  isShowing: boolean = true;
  books: Book[] = [];

  constructor(private bookService: BooksService) {
    console.log("In constructor");
    this.books = bookService.getBooks();
  }


  // bookService = new BooksService();


  ngOnInit(): void {
    console.log("In ngOnInit()");

  }

  cart: Book[] = [];

  addToCart(book: Book) {
    this.cart.push(book);

    //logging the last book name in cart:
    console.log(this.cart[this.cart.length - 1].name);

  }

}
