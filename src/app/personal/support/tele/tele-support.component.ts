import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nao-tele',
  templateUrl: './tele-support.component.html',
  styleUrls: ['./tele-support.component.css']
})
export class TeleSupportComponent implements OnInit {

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
