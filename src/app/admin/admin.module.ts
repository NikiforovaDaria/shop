import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule, adminRouterComponents } from './admin-routing.module';
import { ProductsModule } from '../components/products/products.module';
import { AdminComponent } from './admin.component';
import { AdminServicesModule } from './admin-services.module';

@NgModule({
  imports: [CommonModule, AdminRoutingModule, ProductsModule, AdminServicesModule],
  declarations: [AdminComponent, adminRouterComponents],
  exports: [AdminComponent]
})
export class AdminModule {}

