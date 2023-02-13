import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  @Output() eventEmitter = new EventEmitter<Book>();
  @Output() sendName = new EventEmitter<string>();

  myInterval: any;

  constructor() { }


  ngOnInit(): void {

  }

  addToCart() {
    // console.log(this.book);
    this.eventEmitter.emit(this.book);
    this.sendName.emit("Sumit");
  }

}
