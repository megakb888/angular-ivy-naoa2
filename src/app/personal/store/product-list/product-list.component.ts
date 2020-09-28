import { Component, OnInit } from '@angular/core';
import { StoreService } from "../shared/store.service";
import { Product } from "../shared/product.model";

@Component({
  selector: 'nao-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public productList: Array<Product>;

  constructor(private productService: StoreService) { }

  ngOnInit()
  {
    this.productService.getList()
      .subscribe(data =>
      {
        this.productList = data;
        console.log(this.productList);
      });
  }

}
