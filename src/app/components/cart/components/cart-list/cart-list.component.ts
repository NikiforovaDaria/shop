import { Component, OnInit, Inject } from '@angular/core';
import { ProductModel } from 'src/app/components/products/models/productModel.model';
import { CartService } from '../../services/cart.service';
import { GeneratorService } from 'src/app/core/services/generator.service';
import { RandomStringFactory, Random_String } from '../../../../core/services/random-string-factory';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
  providers: [
    GeneratorService,
    { provide: Random_String, useFactory: RandomStringFactory(12), deps: [GeneratorService] }
  ]
})
export class CartListComponent implements OnInit {

  cartProducts: ProductModel[];

  constructor(private cartService: CartService, @Inject(Random_String) private randomString: any[]) { }

  ngOnInit() {
    this.cartProducts = this.cartService.getCartProduct();
    console.log(this.randomString);
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
