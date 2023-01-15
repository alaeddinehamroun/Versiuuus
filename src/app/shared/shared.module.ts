import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './error404/error404.component';
import { AuthModule } from '../auth/auth.module';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    Error404Component
  ],
  imports: [
    AuthModule,
    CommonModule,
  ],
  exports: [
    FooterComponent,
    NavbarComponent,
    Error404Component
  ]
})
export class SharedModule { }
