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

}
