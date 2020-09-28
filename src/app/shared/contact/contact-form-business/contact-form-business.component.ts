import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../contact.service";

@Component({
  selector: 'nao-contact-form-business',
  templateUrl: './contact-form-business.component.html',
  styleUrls: ['./contact-form-business.component.css']
})
export class ContactFormBusinessComponent implements OnInit {

  public contactFormBusiness = new FormGroup({
    name: new FormControl('', [
      Validators.required
    ]),
    mail: new FormControl('', [
      Validators.required
    ]),
    tel: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private contactService: ContactService) { }

  ngOnInit() {
  }

  sendForm()
  {
    this.contactService.sendContactFormBusiness(this.contactFormBusiness.value)
      .subscribe(data =>
      {
        console.log("Säljmeddelande skickat!");
      });
  }

}
