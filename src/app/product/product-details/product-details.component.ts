import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { Location } from '@angular/common';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'product-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {


  product!: Product
  id!: string
  category!: string
  constructor(private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    public cartService: CartService,
    private _location: Location) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // console.log(params)
      this.productService.getProductById(params['category'], params['id']).subscribe({
        next: response => {
          this.product = response;
          // console.log(this.product)
          this.category = (params['category'])
        },
        error: err => {
          console.log(err)

          this.router.navigate(['**'])
        },

        complete: () => {
          console.info('complete')
        }
      });
    });
  }


  onBack(): void {
    this._location.back()
  }
  public getMinPrice(): string {
    if (!this.product.price_mytek) {
      return this.product.price_tunisianet

    }
    if (!this.product.price_tunisianet) {
      return this.product.price_mytek

    }
    if (Number(this.product.price_mytek) > Number(this.product.price_tunisianet)) {
      return this.product.price_tunisianet
    }
    else
      return this.product.price_mytek

  }
  public availability() {
    if (!this.product.availability_mytek) {
      return this.product.availability_tunisianet

    }
    if (!this.product.availability_tunisianet) {
      return this.product.availability_mytek

    }
    if ((this.product.availability_mytek === 'en stock') || (this.product.price_tunisianet === 'en stock')) {
      return 'En stock'
    }
    else
      return 'Epuisé'

  }
}
