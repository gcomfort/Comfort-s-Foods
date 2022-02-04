import { FoodService } from './../services/food/food.service';
import { CartItem } from './../models/cartitem';
import { CartService } from './../services/cart/cart.service';
import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';


@Component({
  selector: 'app-cart-page',
  templateUrl: './cart-page.component.html',
  styleUrls: ['./cart-page.component.css']
})
export class CartPageComponent implements OnInit {

  cart!:Cart;

  constructor(private cartService: CartService) {
     this.setCart();
   }

  ngOnInit(): void {

  }


  removeFromCart(CartItem:CartItem){
    this.cartService.removeFromCart(CartItem.food.id);
    this.setCart();
  }

  changeQuantity(CartItem:CartItem, quantityInString:string){
    const quantity= parseInt(quantityInString);
    this.cartService.changeQuantity(CartItem.food.id, quantity);
    this.setCart();
  }

  setCart(){
    this.cart = this.cartService.getCart();

  }

}
