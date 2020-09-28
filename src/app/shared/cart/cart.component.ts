import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { CartService } from "../../personal/store/shared/cart.service";
import { Product } from "../../personal/store/shared/product.model";

@Component({
  selector: 'nao-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  @Input() viewOnly?: boolean;

  cart: Array<any>;

  amounts: number[];

  constructor(private cartService: CartService)
  {
    this.setAmounts();
  }

  ngOnInit()
  {
    this.cartService.syncCart();
    this.getCart();
  }

  setAmounts()
  {
    this.amounts = [1,2,3,4,5,6,7,8,9,10];
  }

  getCart()
  {
    this.cartService.cart$
      .subscribe(data =>
      {
        if(data)
        {
          this.cart = data;
        }
      });
  }

  updateCart(product: Product)
  {
    this.cartService.updateCart(product)
      .subscribe(data =>
      {
        this.setCurrentAmountItems();
      });
  }

  removeProduct(product: Product)
  {
    this.cartService.removeProduct(product)
      .subscribe(data =>
      {
        this.setCurrentAmountItems();
        this.cartService.syncCart();
      });
  }

  setCurrentAmountItems()
  {
    this.cartService.getTotalAmountOfProducts()
      .subscribe(total =>
      {
        this.cartService.setAmountItems(total['totalAmount']);
      });
  }

}
