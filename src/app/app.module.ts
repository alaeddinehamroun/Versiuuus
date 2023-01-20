import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CartModule } from './cart/cart.module';
import { HomeModule } from './home/home.module';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent],
  imports: [
    CartModule,
    ProductModule,
    SharedModule,
    HomeModule,
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

})
export class AppModule { }
