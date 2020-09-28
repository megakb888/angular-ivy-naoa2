import { Component, OnInit } from '@angular/core';
import { CitynetService } from "../citynet.service";

@Component({
  selector: 'nao-citynet-list',
  templateUrl: './citynet-list.component.html',
  styleUrls: ['./citynet-list.component.css']
})
export class CitynetListComponent implements OnInit {

  private citynetList: any;

  constructor(private citynetService: CitynetService) { }

  ngOnInit() {
    this.getList();
  }

  getList()
  {
    this.citynetService.getCitynets()
      .subscribe(data => {
        this.citynetList = data;
        console.log(this.citynetList);
      });
  }

}
