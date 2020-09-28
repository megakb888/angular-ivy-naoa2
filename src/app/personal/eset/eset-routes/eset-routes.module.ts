import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EsetComponent } from "../eset.component";

const esetRoutes: Routes = [
  {path: 'sakerhetspaket', component: EsetComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(esetRoutes)
  ],
  exports: [RouterModule]
})
export class EsetRoutesModule { }
