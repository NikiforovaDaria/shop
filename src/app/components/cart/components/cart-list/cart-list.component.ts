import { Component, OnInit, Inject } from '@angular/core';
import { ProductModel } from 'src/app/components/products/models/productModel.model';
import { CartService } from '../../services/cart.service';
import { RandomNumberService } from 'src/app/core/services/random-number.service';
import { GeneratorService, Data_Top3, generatorServiceFactory } from 'src/app/core/services/generator.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [GeneratorService, {provide: Data_Top3, useFactory: generatorServiceFactory, deps: [RandomNumberService]}]
})
export class CartListComponent implements OnInit {

  cartProducts: ProductModel[];

  constructor(private cartService: CartService, @Inject(Data_Top3) private dataTop3: any[]) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProduct();
    console.log(111, this.dataTop3)
  }

  get totalPrice () {
    return this.cartService.getTotalPrice();
  }

  get totalAmount() {
    return this.cartService.getTotalAmount();
  }

  onIncreaseCartProductEmitter(cartProduct: ProductModel) {
    this.cartService.increaseCartProduct(cartProduct);
  }

  onDecreaseCartProductEmitter(cartProduct: ProductModel, i: number) {
    this.cartService.decreaseCartProduct(cartProduct, i);
  }
}
