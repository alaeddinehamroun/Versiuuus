import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { map } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';
import { Location } from '@angular/common';

@Component({
  selector: 'product-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product!: Product
  id!: string
  constructor(private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService,
    private _location: Location) { }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.productService.getProductById(params['category'], params['id']).subscribe({
        next: response => {
          this.product = response;
          console.log(this.product)
        },
        error: err =>
          console.log(err),

        complete: () => {
          console.info('complete')
        }
      });
    });
  }


  onBack(): void {
    this._location.back()
  }

}
