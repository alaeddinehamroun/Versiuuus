import { Component } from '@angular/core';

@Component({
  selector: 'home-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  products: string[] = [];
  addProduct(newProduct: string) {

    if ((newProduct) && (this.products.length < 4)) {
      this.products.push(newProduct);
    }
  }

}
