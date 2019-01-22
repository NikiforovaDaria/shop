import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from './components/products/components/product/product.component';
import { ProductListComponent } from './components/products/components/product-list/product-list.component';
import { ProductsService } from './components/products/services/products.service';
import { CartComponent } from './components/cart/components/cart/cart.component';
import { CartService } from './components/cart/services/cart.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CartComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ProductsService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
