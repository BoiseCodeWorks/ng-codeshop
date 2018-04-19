import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { Product } from './models/product';
import { NotificationsService } from './notifications.service';

@Injectable()
export class ProductService {

	constructor(private notificationsService: NotificationsService) { }

	public async getProducts(): Promise<Product[]> {
		//of is used for faking an actual observable
		return new Promise<Product[]>((resolve, reject) => {
			setTimeout(() => {
				resolve(products);
			}, 500)
		});
	}
	public async getProduct(id: string | number): Promise<Product> {
		return products.find(p => p.id == id);
	}
	public async getRelatedProduct(product: Product): Promise<Product[]> {
		return new Promise<Product[]>((resolve, reject) => {
			setTimeout(() => {

				let tagMap = {}
				product.tags.forEach(t => tagMap[t] = t)

				resolve(products.filter(p => p.id != product.id && p.tags.filter(t => tagMap[t]).length));
			}, 500)
		});
	}
}


let products: Product[] = [{
	id: 1,
	name: 'CodeWorks T1',
	description: 'Cotton Tee',
	tags: ['shirts'],
	price: 14.99,
	img: 'assets/shirt-1.jpg'
}, {
	id: 2,
	name: 'CodeWorks T2',
	description: 'Cotton Tee',
	tags: ['shirts'],
	price: 14.99,
	img: 'assets/shirt-2.jpg'
}, {
	id: 3,
	name: 'CodeWorks T3',
	description: 'Cotton Tee',
	tags: ['shirts'],
	price: 14.99,
	img: 'assets/shirt-3.jpg'
}, {
	id: 4,
	name: 'CodeWorks Hoodie',
	description: 'warm enough for Idaho',
	tags: ['sweaters'],
	price: 21.99,
	img: 'assets/hoodie-1.jpg'
}, {
	id: 5,
	name: 'CodeWorks Hat',
	description: 'a rather dashing hat',
	tags: ['awesome', 'hats'],
	price: 11.99,
	img: 'assets/hat-1.jpg'
}, {
	id: 5,
	name: 'CodeWorks Sticker',
	description: 'Not a cotton Tee this is a sticker',
	tags: ['awesome', 'sticker'],
	price: 4.99,
	img: 'assets/sticker-2.png'
}]