import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/components/products/models/productModel.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {

  cartProducts: ProductModel[];
  totalPrice: number;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProduct();
  }

ngAfterContentChecked()  {
  this.totalPrice = this.cartService.getTotalPrice();
}
  onAddOnecartProductEmitter(cartProduct: ProductModel){
    this.cartService.addOnecartProduct(cartProduct)
  }

}
