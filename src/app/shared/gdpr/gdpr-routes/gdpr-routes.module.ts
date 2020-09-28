import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { GdprComponent } from "../gdpr.component";

const gdprRoutes: Routes = [
  {path: 'gdpr', component: GdprComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(gdprRoutes)
  ],
  exports: [RouterModule]
})
export class GdprRoutesModule { }
