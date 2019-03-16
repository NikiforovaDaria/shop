import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductAboutComponent } from './components/product-about/product-about.component';
import { FeedbackComponent } from '../feedback/feedback.component';


const routes: Routes = [
  {
    path: 'product-list',
    component: ProductListComponent
  },
  {
    path: 'product/:productID',
    component: ProductAboutComponent,
  },
  {
    path: 'feedback',
    component: FeedbackComponent,
    outlet: 'feedback'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {}






