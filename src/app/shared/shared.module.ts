import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Error404Component } from './error404/error404.component';
import { AuthModule } from '../auth/auth.module';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { TruncatePipe } from '../pipes/truncate.pipe';
import { SortPipe } from '../pipes/sort.pipe';
import { DtPipe } from '../pipes/dt.pipe';
import { NamePipe } from '../pipes/name.pipe';
import { PriceFilterPipe } from '../pipes/price-filter.pipe';



@NgModule({
  declarations: [
    FooterComponent,
    NavbarComponent,
    Error404Component,
    TruncatePipe,
    SortPipe,
    DtPipe,
    NamePipe,
    PriceFilterPipe
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
    TruncatePipe,
    DtPipe,
    SortPipe,
    NamePipe,
    PriceFilterPipe
  ],

})
export class SharedModule { }
