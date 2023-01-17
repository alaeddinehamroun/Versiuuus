import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit, AfterViewInit {
  category: string = '';
  products: Product[] = [];
  pageNumber: number = 1;

  constructor(private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService) { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map((param: ParamMap) => {
        return param.get("category");
      })
    ).subscribe(category => {
      if (category)
        this.category = category;
      if (["all", "pcs", "phones", "accessories"].indexOf(this.category) < 0) {
        this.router.navigate(['**'])
      }


      this.productService.getProductsByCategory(this.category).subscribe({
        next: response => {
          this.products = response;
          console.log(this.products)
        },
        error: err =>
          console.log(err),

        complete: () => {
          console.info('complete')
        }
      });

    })
  }
}
