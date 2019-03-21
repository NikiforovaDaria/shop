import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartLinkComponent } from './cart-link.component';
import { CartListComponent } from './components/cart-list/cart-list.component';
import { OrderComponent } from '../order/order.component';



const routes: Routes = [
  {
    path: 'cart',
    component: CartLinkComponent,
    children: [
      {
        path: '',
        component: CartListComponent
      },
      {
        path: 'order',
        component: OrderComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CartRoutingModule {}




