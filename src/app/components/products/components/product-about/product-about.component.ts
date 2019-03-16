import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

import { switchMap } from 'rxjs/operators';

import { ProductModel } from '../../models/productModel.model';
import { ProductsService } from '../../services/products.service';

@Component ({
  selector: 'app-product-about',
  templateUrl: './product-about.component.html',
  styleUrls: ['./product-about.component.css']
})
export class ProductAboutComponent implements OnInit {

  product: ProductModel;

  constructor(private productsService: ProductsService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    // this.product = new ProductModel();

    this.route.paramMap
      .pipe(
        switchMap((params: Params) => this.productsService.getProduct(+params.get('productID'))))
      .subscribe(
        product => this.product = { ...product },
        err => console.log(err)
      );

  }

  onGoBack() {
    this.router.navigate(['/product-list']).then(() => this.router.navigate([{ outlets: { feedback: null}}]));
  }

  onDisplayFeedback(): void {
    this.router.navigate([{ outlets: { feedback: ['feedback'] }}]);
  }
}
