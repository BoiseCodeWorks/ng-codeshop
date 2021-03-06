import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product'
import { ProductService } from '../product.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  constructor(private productService: ProductService) { }
  products: Product[];

  ngOnInit() {
    this.getProducts();
  }

  async getProducts() {
    this.products = await this.productService.getProducts();
  }

}
