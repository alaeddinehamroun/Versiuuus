import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsListComponent } from './products-list/products-list.component';
import { ComparisonResultComponent } from './comparison-result/comparison-result.component';
import { SharedModule } from '../shared/shared.module';
import { CardComponent } from './card/card.component';
import { ProductRoutingModule } from './product-routing.module';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { ProductDetailsComponent } from './product-details/product-details.component';



@NgModule({
  declarations: [
    ProductsListComponent,
    ComparisonResultComponent,
    CardComponent,
    ProductDetailsComponent,
    
  ],
  imports: [
    SharedModule,
    CommonModule,
    ProductRoutingModule,
    NgxPaginationModule
  ],

})
export class ProductModule { }
