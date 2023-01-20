import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'product-comparison-result',
  templateUrl: './comparison-result.component.html',
  styleUrls: ['./comparison-result.component.css']
})
export class ComparisonResultComponent implements OnInit {
  product_ids: Product[] = []
  products: Product[] = []
  constructor(private activatedRoute: ActivatedRoute,private productService: ProductService) { }
  ngOnInit(): void {
    if (this.activatedRoute.snapshot.queryParams['product_ids']){
      this.product_ids = JSON.parse(this.activatedRoute.snapshot.queryParams['product_ids']);
      this.product_ids.forEach(p_id => {
        this.productService.getProductById(p_id.category+'s', p_id._id).subscribe({
          next: (v) => this.products.push(v),
          error: (e) => console.log(e),
          complete: () => console.log("complete")
        })
      });
    }


    console.log(this.product_ids)
  }

  splitDescription(desc: string) {
    return desc.split('-', 5)
  }

}
