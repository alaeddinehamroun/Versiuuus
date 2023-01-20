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
  attribute: string = 'minPrice';
  order: string = 'asc';
  isLoading: boolean = false;
  minPrice!: number;
  maxPrice!: number;
  isFilterByPrice: boolean = false
  constructor(private router: Router,
    private productService: ProductService,
    private activatedRoute: ActivatedRoute,
    private authService: AuthService) { }
  ngAfterViewInit(): void {

  }

  ngOnInit(): void {

    this.isLoading = true;

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
          this.products.forEach(product => {
            product.minPrice = this.getMinPrice(product.price_mytek, product.price_tunisianet)
            // console.log(Number(product.minPrice))
          })
        },
        error: err =>
          console.log(err),

        complete: () => {
          this.isLoading = false;
          console.info('complete')

          // this.products.forEach(p => {
          //   if (p.price_mytek){
          //     let price1 = p.price_mytek.replace(/\s/g, "").match(/\d+\,\d+/)
          //     console.log(price1![0])
          //   }
          //   if (p.price_tunisianet) {
          //     let price2 = p.price_tunisianet.replace(/\s/g, "").match(/\d+\,\d+/)
          //     console.log(price2![0])
          //   }



          // });
        }
      });

    })
  }
  changeSortParams(attribute: string, order: string) {
    this.attribute = attribute;
    this.order = order;
  }
  public getMinPrice(price1: string, price2: string): string {
    if (!price1) {
      return price2

    }
    if (!price2) {
      return price1

    }
    if (Number(price1) > Number(price2)) {
      return price2
    }
    else
      return price1

  }


  filterProducts() {

    // console.log(this.minPrice)
    // console.log(this.maxPrice)
    this.isFilterByPrice = true;
  }
  resetProducts(){
    this.isFilterByPrice = false;
  }
}
