import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from 'src/app/models/cart.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'shared-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  email!: string;
  isShown = false;
  numberOfWishes: number = 0;
  cartList: Cart[] = []
  constructor(private router: Router, public authService: AuthService, public cartService: CartService) {

  }
  ngOnInit(): void {
    this.cartService.cart$.subscribe((data: Cart[]) => {
      this.numberOfWishes = data.length
      this.cartList = data
    })
  }

  hideLogin(value: string) {
    if (value)
      this.email = value
    if (value && this.isShown) {

      this.isShown = !this.isShown
    }
  }

  viewProduct(category: string, id: string) {
    this.router.navigate(['/products', category, id])
  }



}
