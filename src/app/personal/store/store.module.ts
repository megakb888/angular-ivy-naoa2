import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

import { StoreComponent } from './store.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { ProductDetailComponent } from './product/product-detail/product-detail.component';

@NgModule({
  declarations: [StoreComponent, CheckoutComponent, ProductListComponent, ProductComponent, ProductCardComponent, ProductDetailComponent],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [
    StoreComponent,
    CheckoutComponent
  ]
})
export class StoreModule { }
