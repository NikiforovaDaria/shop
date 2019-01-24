import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './components/products/products.module';
import { CartModule } from './components/cart/cart.module';
import { CartListComponent } from './components/cart/components/cart-list/cart-list.component';


@NgModule({
  declarations: [AppComponent, CartListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
