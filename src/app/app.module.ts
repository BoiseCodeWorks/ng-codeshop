import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { NotificationsComponent } from './notifications/notifications.component';
import { NotificationsService } from './notifications.service';
import { CartService } from './cart.service';
import { CartComponent } from './cart/cart.component';
import { AppRoutingModule } from './/app-routing.module'


@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductDetailComponent,
    NotificationsComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    ProductService,
    NotificationsService,
    CartService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
