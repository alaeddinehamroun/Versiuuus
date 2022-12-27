import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HeroComponent } from './components/home/hero/hero.component';
import { FooterComponent } from './shared/footer/footer.component';
import { CategoriesComponent } from './components/home/categories/categories.component';
import { Error404Component } from './components/error404/error404.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { CardComponent } from './components/products-list/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    HeroComponent,
    FooterComponent,
    CategoriesComponent,
    Error404Component,
    ProductsListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
