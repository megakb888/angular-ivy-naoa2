import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PricelistsComponent } from "../pricelists.component";

const pricelistsRoutes: Routes = [
  {path: 'faq/prislistor', component: PricelistsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(pricelistsRoutes)
  ],
  exports: [RouterModule]
})
export class PricelistsRoutesModule { }
