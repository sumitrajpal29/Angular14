import { Component, OnInit } from '@angular/core';

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
  buttonText: string = "Hide Books";
  changeButtonText() {
    this.buttonText = "Hide Books" ? "Show Books" : "Hide Books";
  }

}
