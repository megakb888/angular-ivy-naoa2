import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { CitynetService } from "../citynet.service";
import { CitynetView } from "./citynet-view";

@Component({
  selector: 'nao-citynet',
  templateUrl: './citynet.component.html',
  styleUrls: ['./citynet.component.css']
})
export class CitynetComponent implements OnInit {

  citynet: CitynetView;

  constructor(
    private route: ActivatedRoute,
    private citynetService: CitynetService
  ) { }

  ngOnInit()
  {
    this.route.paramMap.subscribe(params =>
    {
      this.citynet = this.citynetService.getCitynetData(params.get('namn'));
    });

  }

}
