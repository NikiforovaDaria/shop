import { Injectable } from '@angular/core';
import { Router, Resolve, ActivatedRouteSnapshot, ActivatedRoute, RouterStateSnapshot } from '@angular/router';

import { AdminModule } from '../admin.module';
import { ProductModel } from 'src/app/components/products/models/productModel.model';
import { ProductsService } from 'src/app/components/products/services/products.service';
import { AdminServicesModule } from '../admin-services.module';


@Injectable({
  providedIn: AdminServicesModule
})

export class ProductResolveGuard implements Resolve<ProductModel> {

  constructor(
    private productService: ProductsService,
    private router: Router
  ) {}

  async resolve(route: ActivatedRouteSnapshot): Promise<ProductModel> {
    const id: number = +route.paramMap.get('productID');
    const product = await this.productService.getProduct(id);
    if (product) {
      return product;
    } else {
      this.router.navigate(['/products']);
      return null;
    }
  }
}

