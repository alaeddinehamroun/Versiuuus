import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'product-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnChanges, OnInit {

  @Input() product?: Product;
  @Input() category?: string;
  constructor( public cartService: CartService) {
    //console.log(this.product)

  }
  ngOnChanges(changes: SimpleChanges): void {
    //console.log(changes)
  }
  ngOnInit(): void {
    //console.log(this.product)
  }
  onClick() {
    if (this.cartService.userHasLiked(this.product?._id!))
      this.cartService.RemoveProductFromCart(this.product?._id!)
    else
      this.cartService.AddProductToCart(this.product?._id!, this.product?.name!, this.category!)
  }



}
