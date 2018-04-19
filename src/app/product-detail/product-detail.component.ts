import { Component, OnInit } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../product.service';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private productService: ProductService) { }
  product: Product
  relatedProducts: Product[]

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.getProduct()
    })
  }

  async getProduct() {
    let id = this.route.snapshot.paramMap.get('id');
    this.product = await this.productService.getProduct(id);
    this.getRelatedProducts();
  }

  async getRelatedProducts() {
    this.relatedProducts = await this.productService.getRelatedProduct(this.product);
  }
}
