import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartComponent } from './components/cart/cart.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { CartService } from './services/cart.service';

@NgModule({
  imports: [CommonModule],
  declarations: [CartComponent, CartListComponent],
  providers: [],
  exports: [CartComponent, CartListComponent]
})
export class CartModule {}
