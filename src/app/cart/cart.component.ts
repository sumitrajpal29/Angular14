import { Component, OnInit } from '@angular/core';
import { Book } from '../types/Book';
import { CartService } from './cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartBooks: Book[] = [];

  constructor(cartService: CartService) {
    this.cartBooks = cartService.getCartBooks();
  }

  ngOnInit(): void {
  }

}
