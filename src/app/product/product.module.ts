import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ComparisonResultComponent } from './comparison-result/comparison-result.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [
    ProductsListComponent,
    ComparisonResultComponent,
    CardComponent
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductModule { }
