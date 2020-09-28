import {  Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Product } from "./product.model";
import { environment } from "../../../../environments/environment";
import {BehaviorSubject, Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private amountItems = new BehaviorSubject<number>(0);
  currentAmount$ = this.amountItems.asObservable();

  private cart = new BehaviorSubject<Array<any>>([]);
  cart$ = this.cart.asObservable();

  constructor(private http:HttpClient)
  {
    this.getTotalAmountOfProducts()
      .subscribe(total =>
      {
        this.setAmountItems(total['totalAmount']);
      });
  }

  getCart(): Observable<[]>
  {
    return this.http.get<[]>(environment.appUrl + '/api/nao/cart/getCartForCustomer');
  }

  syncCart()
  {
    this.getCart()
      .subscribe(cart => {
        this.cart.next(cart);
      });
  }

  addToCart(product: Product): Observable<Product>
  {
    console.log(product);
    return this.http.post<Product>(environment.appUrl + '/api/nao/cart/addItemToCart', product);
  }

  updateCart(product: Product): Observable<Product>
  {
    return this.http.post<Product>(environment.appUrl + '/api/nao/cart/setAmountForItemInCart', product);
  }

  removeProduct(product: Product): Observable<Product>
  {
    return this.http.delete<Product>(environment.appUrl + '/api/nao/cart/removeItemFromCart/' + product.product_id);
  }

  getTotalAmountOfProducts(): Observable<[]>
  {
    return this.http.get<[]>(environment.appUrl + '/api/nao/cart/getTotalAmountOfItemsInCart');
  }

  setAmountItems(amount: number)
  {
    this.amountItems.next(amount);
  }
}
