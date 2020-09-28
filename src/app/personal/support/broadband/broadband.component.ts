import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nao-broadband',
  templateUrl: './broadband.component.html',
  styleUrls: ['./broadband.component.css']
})
export class BroadbandComponent implements OnInit {

  private opened: string;

  constructor() { }

  ngOnInit()
  {
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
