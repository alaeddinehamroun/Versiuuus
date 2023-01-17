import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparisonResultComponent } from './comparison-result/comparison-result.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: 'products/:category', component: ProductsListComponent },
  { path: 'comparison', component: ComparisonResultComponent },
  { path: 'products/:category/:id', component: ProductDetailsComponent }


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
