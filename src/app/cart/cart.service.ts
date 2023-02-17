import { Injectable } from '@angular/core';
import { Book } from '../types/Book';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Array<Book> = [];     //It can be Book[] also.

  constructor() { }

  add(book: Book) {
    this.cart.push(book);
    console.log(this.cart);

  }
  remove(book: Book) {
    // delete this.cart[this.cart.indexOf(book)];
    this.cart.pop();
    // this.cart = this.cart.filter((b) => b != book);
    alert(book.name + " removed from Cart.");
    
  }

  getCartBooks() {
    return this.cart;
  }
}
