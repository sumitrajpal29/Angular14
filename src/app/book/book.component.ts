import { Component, OnInit, Input } from '@angular/core';
import { CartService } from '../cart/cart.service';
import { Book } from '../types/Book';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  @Input() book: Book = {} as Book;
  isInCart = false;
  constructor(private cartService: CartService) { }

  ngOnInit(): void {

  }

  addToCart() {
    this.cartService.add(this.book);
    this.isInCart = true;

  }

  removeFromCart() {
    this.cartService.remove(this.book);
    this.isInCart = false;
    console.log(this.cartService.cart);
  }

}
