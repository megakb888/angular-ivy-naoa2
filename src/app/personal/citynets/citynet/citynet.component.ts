import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { CitynetService } from "../citynet.service";
import { CitynetView } from "./citynet-view";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "nao-citynet",
  templateUrl: "./citynet.component.html",
  styleUrls: ["./citynet.component.css"]
})
export class CitynetComponent implements OnInit {
  customOptions: any = {
    loop: true,
    margin: 10,
    autoplay: true,
    responsiveClass: true,
    navText: ["Previous", "Next"],
    responsive: {
      0: {
        items: 1
      },
      480: {
        items: 2
      },
      940: {
        items: 3
      }
    },
    nav: true
  };

  citynet: CitynetView;

  constructor(
    private route: ActivatedRoute,
    private citynetService: CitynetService
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.citynet = this.citynetService.getCitynetData(params.get("namn"));
    });
  }
}
