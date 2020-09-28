import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nao-support-contact-widget',
  templateUrl: './support-contact-widget.component.html',
  styleUrls: ['./support-contact-widget.component.css']
})
export class SupportContactWidgetComponent implements OnInit {

  public open: boolean;
  public openCalltimes: boolean;

  constructor() { }

  ngOnInit() {
  }

}
