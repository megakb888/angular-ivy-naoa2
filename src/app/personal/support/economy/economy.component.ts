import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nao-economy',
  templateUrl: './economy.component.html',
  styleUrls: ['./economy.component.css']
})
export class EconomyComponent implements OnInit {

  private opened: string;
  constructor() { }

  ngOnInit() {
  }

  togglePanel(panelId)
  {
    if(this.opened == panelId)
    {
      this.opened = "";
    }
    else
    {
      this.opened = panelId;
    }
  }
}
