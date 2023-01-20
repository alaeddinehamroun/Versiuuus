import { Component, OnInit } from '@angular/core';
import { Cart } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-details',
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css']
})
export class CartDetailsComponent implements OnInit {
  numberOfWishes: number = 0;
  cartList: Cart[] = []
  constructor(private cartService: CartService) {

  }
  ngOnInit(): void {
    this.cartService.cart$.subscribe((data: Cart[]) => {
      this.numberOfWishes = data.length
      this.cartList = data
    })
  }



}
