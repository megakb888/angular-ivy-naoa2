import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";

import { Observable } from "rxjs";
import { Product } from "./product.model";
import { StoreOrderModel } from "../checkout/store-order.model";

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private baseUrl: string = environment.appUrl;
  constructor(private http: HttpClient) { }

  getList(): Observable<Product[]>
  {
    return this.http.get<Product[]>(this.baseUrl + '/api/nao/store/getProducts');
  }

  getProduct(id): Observable<Product>
  {
    return this.http.get<Product>(this.baseUrl + '/api/nao/store/getProductById/' + id);
  }

  placeOrder(order: StoreOrderModel): Observable<any>
  {
    return this.http.post(this.baseUrl + '/api/nao/store/placeOrder', order);
  }
}
