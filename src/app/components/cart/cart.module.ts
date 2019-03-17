import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { SharedModule } from '../shared/shared.module';
import { CartLinkComponent } from './cart-link.component';
import { CartRoutingModule } from './cart-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, CartRoutingModule],
  declarations: [CartComponent, CartListComponent, CartLinkComponent],
  providers: [],
  exports: [CartComponent, CartListComponent, CartLinkComponent]
})
export class CartModule {}
