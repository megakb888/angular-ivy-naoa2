import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CartService } from "../../../personal/store/shared/cart.service";

@Component({
    selector: 'nao-cart-modal',
    templateUrl: './cart-modal.component.html',
    styleUrls: ['./cart-modal.component.css']
})
export class CartModalComponent implements OnInit
{
  amountItems: number;
    constructor(
      private modalService: NgbModal,
      private cartService: CartService)
    {

    }

    ngOnInit()
    {
      this.getAmountItems();
    }

    getAmountItems()
    {
      this.cartService.currentAmount$.subscribe(currentAmount =>
      {
        this.amountItems = currentAmount;
      });
    }

    open(cartModal)
    {
        this.modalService.open(cartModal, {size: 'lg', ariaLabelledBy: 'cart-modal-title'}).result.then((result) =>
        {
            //console.log(result);
        }, (reason) =>
        {
            //console.log(reason);
        });
    }
}
