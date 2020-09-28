import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { ContactService } from "../contact.service";

@Component({
  selector: 'nao-contact-form-basic',
  templateUrl: './contact-form-basic.component.html',
  styleUrls: ['./contact-form-basic.component.css']
})
export class ContactFormBasicComponent implements OnInit {

  contactFormBasic = new FormGroup({
    name: new FormControl('', ),
    civ: new FormControl('', [
      Validators.required
    ]),
    mail: new FormControl('', [
      Validators.required
    ]),
    tel: new FormControl('', [
      Validators.required
    ]),
    message: new FormControl('', [
      Validators.required
    ])
  });

  constructor(private contactService: ContactService)
  {

  }

  sendMessage()
  {
    this.contactService.sendContactFormBasic(this.contactFormBasic.value)
      .subscribe(data =>
      {
        console.log("Meddelande skickat!");
      });
  }

  ngOnInit()
  {

  }

}
