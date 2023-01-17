import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';
import { fromEvent } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'home-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  searchQuery!: string;
  suggestions!: Product[];
  products: Product[] = [];
  constructor(private productService: ProductService) { }
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
        console.log(response)
        this.suggestions = response
        this.products.forEach(p => {
          this.suggestions=this.suggestions.filter(sugg => sugg["_id"] !== p._id)

        });

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
}
