import { Component, OnInit, Inject } from '@angular/core';
import { ProductModel } from 'src/app/components/products/models/productModel.model';
import { CartService } from '../../services/cart.service';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { generatorServiceProvider } from 'src/app/core/services/generator.service.provider';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [{provide: GeneratorService, useFactory: generatorServiceProvider(10),
    deps: []}]
})
export class CartListComponent implements OnInit {

  cartProducts: ProductModel[];

  constructor(private cartService: CartService, private c: GeneratorService) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProduct();
    console.log(this.c)
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
