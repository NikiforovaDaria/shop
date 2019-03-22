import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from 'src/app/components/products/services/products.service';
import { ProductModel } from 'src/app/components/products/models/productModel.model';

@Component({
  selector: 'app-manage-products',
  templateUrl: './manage-products.component.html',
  styleUrls: ['./manage-products.component.css']
})
export class ManageProductsComponent implements OnInit {
  // products: ProductModel[];
  products: Promise<Array<ProductModel>>;
  constructor(
    private router: Router,
    private productService: ProductsService
  ) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  addNewProduct() {
    const link = ['admin/product/add'];
    this.router.navigate(link);
  }
  editProduct(product: ProductModel) {
    const link = ['admin/product/edit', product.id];
    this.router.navigate(link);;
  }
}

