import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './components/products/products.module';
import { CartModule } from './components/cart/cart.module';
import { SharedModule } from './components/shared/shared.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { ProductAboutComponent } from './components/products/components/product-about/product-about.component';
import { FeedbackComponent } from './components/feedback/feedback.component'


@NgModule({
  declarations: [AppComponent, ContactUsComponent, ProductAboutComponent, FeedbackComponent],
  imports: [
    BrowserModule,
    ProductsModule,
    CartModule,
    SharedModule,
    AppRoutingModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {
  }
}
