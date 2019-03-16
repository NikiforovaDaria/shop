import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductsService } from './services/products.service';
import { ProductListComponent } from './components/product-list/product-list.component';

import { ProductsRoutingModule } from "./products-routing.module";



@NgModule({
  imports: [CommonModule, ProductsRoutingModule],
  declarations: [ProductComponent, ProductListComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductsModule {}
