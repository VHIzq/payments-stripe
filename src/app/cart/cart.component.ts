import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html',
  styles: [],
})
export class CartComponent implements OnInit {
  cart: Cart = {items: []}
  
  constructor() { }

  ngOnInit(): void {}
}
