import { NgModule } from '@angular/core';
import { DriftinfoModule } from "../shared/driftinfo/driftinfo.module";
import { SharedModule } from "../shared/shared.module";

import { PropertyComponent } from "./property.component";
import { HomePropertyComponent } from './home-property/home-property.component';
import { NavPropertyComponent } from './core/nav-property/nav-property.component';
import { FooterPropertyComponent } from './core/footer-property/footer-property.component';
import { RouterModule } from '@angular/router';
import { FiberPropertyComponent } from './fiber-property/fiber-property.component';
import { TelePropertyComponent } from './tele-property/tele-property.component';
import { TvPropertyComponent } from './tv-property/tv-property.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    PropertyComponent,
    HomePropertyComponent,
    FiberPropertyComponent,
    NavPropertyComponent,
    FooterPropertyComponent,
    TelePropertyComponent,
    TvPropertyComponent,
    ContactComponent,
  ],
  imports: [
    DriftinfoModule,
    SharedModule,
    RouterModule,
  ]
})
export class PropertyModule { }
