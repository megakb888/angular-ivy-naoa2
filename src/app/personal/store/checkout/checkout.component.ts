import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { StoreOrderModel } from "./store-order.model";
import { StoreService } from "../shared/store.service";
import { Router } from "@angular/router";
import { CartService } from "../shared/cart.service";

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  public order: StoreOrderModel;
  public cartAmountItems: number = 0;

  customerInfo: FormGroup;
  confirmForm: FormGroup;

  public orderDone: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private storeService: StoreService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit()
  {
    this.customerInfo = this.formBuilder.group({
      kundnr: [""],
      name: ["", Validators.required],
      efternamn: ["", Validators.required],
      personnummer: ["", Validators.required],
      mobiltelefonnummer: ["", Validators.required],
      telefonnummer: [""],
      epost: ["", Validators.required],
      adress: ["", Validators.required],
      postnummer: ["", Validators.required],
      ort: ["", Validators.required],
      inv: this.formBuilder.group({
        co: [""],
        adress: [""],
        postnummer: [""],
        ort: [""]
      }),
      ordertotal: [""]
    });

    this.confirmForm = this.formBuilder.group({
      confirmCheck: [false, Validators.required]
    });

    this.subscribeAmountItemsInCart();
  }

  subscribeAmountItemsInCart()
  {
    this.cartService.currentAmount$.subscribe(currentAmount =>
    {
      this.cartAmountItems = currentAmount;
    });
  }

  orderIsDone()
  {
    this.orderDone = true;
  }

  placeOrder(formData)
  {
    this.orderDone = true;
    this.storeService.placeOrder(formData).subscribe(data => {
      console.log(this.orderDone);
      this.cartService.setAmountItems(0);
    });
  }

  goToShop()
  {
    this.router.navigate(['/butik']);
  }

}
