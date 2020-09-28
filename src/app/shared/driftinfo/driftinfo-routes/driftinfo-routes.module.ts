import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { DriftinfoComponent } from "../driftinfo.component";

const driftinfoRoutes: Routes = [
  {path: 'driftinfo', component: DriftinfoComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(driftinfoRoutes)
  ],
  exports: [RouterModule]
})
export class DriftinfoRoutesModule { }
