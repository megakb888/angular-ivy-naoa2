import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-personal',
  templateUrl: './nav-personal.component.html',
  styleUrls: ['./nav-personal.component.css']
})
export class NavPersonalComponent implements OnInit {

  isNavbarCollapsed = true;

  constructor() { }

  ngOnInit() {
  }

}
