import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeleComponent } from "../tele.component";

const teleRoutes: Routes = [
  {path: 'telefoni', component: TeleComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(teleRoutes)
  ],
  exports: [RouterModule]
})
export class TeleRoutesModule { }
