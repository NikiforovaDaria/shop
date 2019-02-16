import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './components/products/products.module';
import { CartModule } from './components/cart/cart.module';
import { SharedModule } from './components/shared/shared.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';


@NgModule({
  declarations: [AppComponent, ContactUsComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductsModule,
    CartModule,
    SharedModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
