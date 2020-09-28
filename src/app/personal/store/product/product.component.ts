import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { StoreService } from "../shared/store.service";
import { Product } from "../shared/product.model";

@Component({
  selector: 'nao-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit
{
  public productId: string;
  public product: Product;

  constructor(private activatedRoute: ActivatedRoute, private productService: StoreService)
  {

  }

  ngOnInit()
  {
    this.activatedRoute.params.subscribe(params =>
    {
      this.productId = params.id;
      this.getProduct(this.productId);
    });
  }

  getProduct(productId)
  {
    this.productService.getProduct(productId)
      .subscribe(data =>
      {
        this.product = data;
        console.log(this.product);
      });
  }

}
