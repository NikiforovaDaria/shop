import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from './admin.component';
import { ManageProductsComponent } from './components/manage-products/manage-products.component';
import { AuthGuard } from '../core/guards/auth.guard';
import { ProductFormComponent } from '../components/products/components/product-form/product-form.component';


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
          {
            path: 'product/add',
            component: ProductFormComponent
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



