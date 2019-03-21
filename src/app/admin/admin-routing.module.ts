import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';

import { ProductFormComponent } from '../components/products/components/product-form/product-form.component';

import { ProductResolveGuard } from './guards/product-resolve.guard';
import { AuthGuard } from '../core/guards/auth.guard';
import { OrderComponent } from '../components/order/order.component';

const routes: Routes = [
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: 'products',
          component: ManageProductsComponent,
          },
          { path: 'order',
          component: OrderComponent,
          },
          {
            path: 'product/add',
            component: ProductFormComponent
          },
          {
            path: 'product/edit/:productID',
            component: ProductFormComponent,
            resolve: {
              product: ProductResolveGuard
            }
          }
        ]
      }
    ]
  }
];

export const adminRouterComponents = ManageProductsComponent;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }



