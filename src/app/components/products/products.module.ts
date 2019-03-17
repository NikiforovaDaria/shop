import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAboutComponent } from './components/product-about/product-about.component';

import { ProductsRoutingModule } from './products-routing.module';



@NgModule({
  imports: [CommonModule, ProductsRoutingModule],
  declarations: [ProductComponent, ProductListComponent, ProductAboutComponent],
  providers: [],
  exports: [ProductListComponent]
})
export class ProductsModule {}
