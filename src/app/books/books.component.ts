import { Component, OnInit } from '@angular/core';


interface Book {
  name: string,
  author: string,
  img: string
  price:number
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
      name: "clean code",
      author: "robert c. martin",
      img: "https://m.media-amazon.com/images/I/41SH-SvWPxL.jpg",
      price:950
    },
    {
      name: "Cracking the Coding Interview",
      author: "Gayle Laakmann McDowell",
      img: "https://m.media-amazon.com/images/I/410hiaPGyCL._SY264_BO1,204,203,200_QL40_FMwebp_.jpg",
      price:760
    },
    {
      name: "Thinking in Java",
      author: "Bruce Eckel",
      img: "https://m.media-amazon.com/images/I/61-ZAFCWcLL._SX376_BO1,204,203,200_.jpg",
      price:4930
    }
  ]





}
