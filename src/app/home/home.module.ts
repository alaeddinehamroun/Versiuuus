import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home.component';
import { CategoriesComponent } from './categories/categories.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    HeroComponent,
    HomeComponent,
    CategoriesComponent
  ],
  imports: [
    SharedModule,
    CommonModule
  ],
  exports: [
    HomeComponent,
  ]
})
export class HomeModule { }
