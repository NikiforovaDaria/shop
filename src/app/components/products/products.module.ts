import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ProductComponent } from './components/product/product.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAboutComponent } from './components/product-about/product-about.component';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductFormComponent } from './components/product-form/product-form.component';



@NgModule({
  imports: [CommonModule, ProductsRoutingModule, FormsModule],
  declarations: [
    ProductComponent,
    ProductListComponent,
    ProductAboutComponent,
    ProductFormComponent
  ],
  providers: [],
  exports: [ProductListComponent, ProductComponent]
})
export class ProductsModule {}
