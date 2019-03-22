import { Component, OnInit } from '@angular/core';

import { switchMap } from 'rxjs/operators';

import { ProductModel } from '../../models/productModel.model';
import { ProductsService } from '../../services/products.service';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  product: ProductModel;
  nextId: number;
  constructor(
    private productsService: ProductsService,
    private route: ActivatedRoute,
    private router: Router,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {

    this.product = new ProductModel('', '', null, null, null, null, null, null);

      this.route.paramMap
      .pipe(
        switchMap((params: Params) =>{
          return this.productsService.getProduct(+params.get('productID'))
        })
      )
      .subscribe(
        product => (this.product = { ...product }),
        err => console.log(err)
      );
  }

  onSaveProduct() {
    let product = { ...this.product };
        product.quantityInCart = 0;
        product.quantity > 0 ? product.isAvailable = true : product.isAvailable = false;
    if (product.id) {
      this.productsService.updateProduct(product);
    } else {
      product.id = this.productsService.maxId;
      this.productsService.createProduct(product);
    }
    this.onGoBack();
  }

    onGoBack() {
      this.router.navigate(['/admin/products']);
    }
}
