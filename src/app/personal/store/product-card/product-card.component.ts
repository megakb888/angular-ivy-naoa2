import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../shared/product.model";
import { CartService } from "../shared/cart.service";

@Component({
  selector: 'nao-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {

  @Input() product: Product;
  constructor(private cartService: CartService)
  {
  }

  ngOnInit() {
  }

  addToCart()
  {
    this.cartService.addToCart(this.product)
      .subscribe(product =>
      {
        this.setCurrentAmountItems();
        this.cartService.syncCart();
        console.log("Produkten " + this.product.product + " tillagd i kundvagnen");
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
