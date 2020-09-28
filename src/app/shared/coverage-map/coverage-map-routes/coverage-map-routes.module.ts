import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { CoverageMapComponent } from "../coverage-map.component";

const coverageMapRoutes: Routes = [
  {path: 'tackningskarta', component: CoverageMapComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(coverageMapRoutes)
  ],
  exports: [RouterModule]
})
export class CoverageMapRoutesModule { }
