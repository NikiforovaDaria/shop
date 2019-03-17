import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, adminRouterComponents } from './admin-routing.module';
import { ProductsModule } from '../components/products/products.module';
import { AdminComponent } from './admin.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, ProductsModule],
  declarations: [AdminComponent, adminRouterComponents],
  exports: [AdminComponent]
})
export class AdminModule {}

