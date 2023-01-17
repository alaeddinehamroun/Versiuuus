import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './error404/error404.component';
import { AuthModule } from '../auth/auth.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from '../pipes/truncate.pipe';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    Error404Component,
    TruncatePipe
  ],
  imports: [
    AuthModule,
    CommonModule,
    FormsModule,
    RouterModule],
  exports: [
    FooterComponent,
    NavbarComponent,
    Error404Component,
    TruncatePipe
  ],

})
export class SharedModule { }
