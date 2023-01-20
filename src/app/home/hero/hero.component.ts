import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'home-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  searchQuery!: string;
  suggestions!: Product[];
  products: Product[] = [];
  constructor(private productService: ProductService, private router: Router) { }
  ngOnInit() {

  }

  addProduct(newProduct: Product) {

    if ((newProduct) && (this.products.length < 5)) {
      this.products.push(newProduct);
    }
  }

  search() {
    this.productService.searchProduct(this.searchQuery).subscribe({
      next: response => {
        this.suggestions = response
        this.products.forEach(p => {
          this.suggestions=this.suggestions.filter(sugg => sugg["_id"] !== p._id)
        });
        if (this.products.length > 0){
          console.log(this.products.length)
          console.log(this.products[0].category)
          this.suggestions = this.suggestions.filter(s => s["category"] == this.products[0].category)
        }

      },
      error: err =>
        console.log(err),

      complete: () => {
        console.info('complete')
      }
    })
  }
  removeProduct(id: string) {
    this.products = this.products.filter(product => product["_id"] !== id)
  }
  compare() {
    this.router.navigate(['comparison'], {queryParams: { product_ids: JSON.stringify(this.products)}})
  }
}
