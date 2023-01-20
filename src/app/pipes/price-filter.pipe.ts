import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';

@Pipe({
  name: 'priceFilter'
})
export class PriceFilterPipe implements PipeTransform {
  transform(items: Product[], minPrice: number, maxPrice: number): any[] {
  
    if (!items) return [];
    if (!minPrice && !maxPrice) return items;

    return items.filter(item => {
      return (Number(item.minPrice) >= minPrice || !minPrice) && (Number(item.minPrice) <= maxPrice || !maxPrice);
    });
  }
}

