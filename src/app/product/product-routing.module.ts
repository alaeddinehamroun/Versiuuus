import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComparisonResultComponent } from './comparison-result/comparison-result.component';
import { ProductsListComponent } from './products-list/products-list.component';

const routes: Routes = [
  { path: 'all', component: ProductsListComponent},
  { path: 'comparison', component: ComparisonResultComponent },


];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
