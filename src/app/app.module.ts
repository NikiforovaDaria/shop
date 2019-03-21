import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Router } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductsModule } from './components/products/products.module';
import { CartModule } from './components/cart/cart.module';
import { SharedModule } from './components/shared/shared.module';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { AdminModule } from './admin/admin.module';
import { CoreModule } from './core/core.module';
import { OrderComponent } from './components/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    ContactUsComponent,
    FeedbackComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    ProductsModule,
    CoreModule,
    CartModule,
    SharedModule,
    AdminModule,
    AppRoutingModule
  ],
  exports: [ProductsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(router: Router) {}
}
