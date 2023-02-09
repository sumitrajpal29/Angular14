import { Component, OnInit } from '@angular/core';


interface Book {
  name: string,
  author: string,
  img: string
}

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})


export class BooksComponent implements OnInit {
  isHidden: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  books: Book[] = [
    {
      name: "Clean Code",
      author: "Robert C. Martin",
      img: "https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg"
    },
    {
      name: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      img: "https://m.media-amazon.com/images/I/410hiaPGyCL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg"
    },
    {
      name: "Thinking in Java",
      author: "Bruce Eckel",
      img: "https://m.media-amazon.com/images/I/61-ZAFCWcLL._SX376_BO1,204,203,200_.jpg"
    }
  ]





}
