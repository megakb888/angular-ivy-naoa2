import { Component, OnInit } from '@angular/core';
import { OpentimesService } from "./opentimes.service";
import { OpentimeModel } from "./opentime.model";

@Component({
  selector: 'nao-opentimes',
  templateUrl: './opentimes.component.html',
  styleUrls: ['./opentimes.component.css']
})
export class OpentimesComponent implements OnInit {

  public openClosed: OpentimeModel;

  constructor(private opentimesService: OpentimesService) { }

  ngOnInit()
  {
    this.opentimesService.getOpentimes()
      .subscribe(data =>
      {
        this.openClosed = data;
      });
  }

}
