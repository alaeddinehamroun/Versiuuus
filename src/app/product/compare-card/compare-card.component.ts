import { Component, Input } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'product-compare-card',
  templateUrl: './compare-card.component.html',
  styleUrls: ['./compare-card.component.css']
})
export class CompareCardComponent {
  @Input() product!: Product
}
