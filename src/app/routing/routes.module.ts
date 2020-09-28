import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalRoutesModule} from "../personal/personal-routes.module";
import { BusinessRoutesModule } from "../business/business-routes.module";
import { PropertyRoutesModule } from "../property/property.routes.module";

const APP_ROUTES: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home'}
];

@NgModule({
  declarations: [],
  imports: [
    BusinessRoutesModule,
    PropertyRoutesModule,
    PersonalRoutesModule,
    RouterModule.forRoot(APP_ROUTES)
  ],
  exports: [RouterModule]
})
export class RoutesModule { }
