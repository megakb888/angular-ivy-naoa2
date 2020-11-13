import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { CitynetComponent } from "./citynet/citynet.component";
import { CitynetListComponent } from "./citynet-list/citynet-list.component";
import { CitynetSearchComponent } from "./citynet-search/citynet-search.component";
import { CitynetsComponent } from "./citynets.component";
import { CarouselModule } from "ngx-owl-carousel-o";

@NgModule({
  declarations: [
    CitynetComponent,
    CitynetListComponent,
    CitynetSearchComponent,
    CitynetsComponent
  ],
  imports: [CommonModule, RouterModule, CarouselModule],
  exports: [CitynetSearchComponent]
})
export class CitynetsModule {}
