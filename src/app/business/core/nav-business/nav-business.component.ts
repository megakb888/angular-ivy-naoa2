import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-business',
  templateUrl: './nav-business.component.html',
  styleUrls: ['./nav-business.component.css']
})
export class NavBusinessComponent implements OnInit {

  isNavbarCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
