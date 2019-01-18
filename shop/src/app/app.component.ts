import { Component } from '@angular/core';
import { Product } from './components/product/product.model';
import { ProductComponent } from './components/product/product.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'shop';


  updateCartStatus(product: Product){
    console.log(product)
  }
}
