import { Component, OnInit } from '@angular/core';
import { ProductModel } from '../products/models/productModel.model';
import { CartService } from '../cart/services/cart.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderProducts: ProductModel[];
  totalOrderAmount: number;

  constructor(private cartService: CartService,) { }

  ngOnInit() {
    this.orderProducts = this.cartService.getCartProduct();
    this.totalOrderAmount = this.cartService.getTotalAmount()
  }



}
