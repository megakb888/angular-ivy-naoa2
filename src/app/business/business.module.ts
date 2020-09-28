import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SharedModule } from "../shared/shared.module";

import { BusinessComponent } from "./business.component";
import { NavBusinessComponent } from "./core/nav-business/nav-business.component";
import { HomeBusinessComponent } from "./home-business/home-business.component";
import { ContactBusinessComponent } from "./contact/contact.component";
import { FooterBusinessComponent } from "./core/footer-business/footer-business.component";

import { MatRadioModule } from '@angular/material/radio';
import { MatSidenavModule } from '@angular/material/sidenav';
import { TelephoneBusinessComponent } from './telephone-business/telephone-business.component';
import { InternetComponent } from './internet/internet.component';
import { IotComponent } from './iot/iot.component';
import { WifiComponent } from './wifi/wifi.component';
import { ServerComponent } from './server/server.component';

@NgModule({
  declarations: [
    BusinessComponent,
    NavBusinessComponent,
    HomeBusinessComponent,
    ContactBusinessComponent,
    FooterBusinessComponent,
    TelephoneBusinessComponent,
    InternetComponent,
    IotComponent,
    WifiComponent,
    ServerComponent
  ],
  imports: [
    RouterModule,
    SharedModule,
    MatRadioModule,
    MatSidenavModule,

  ],
  exports: [
    BusinessComponent,
    NavBusinessComponent,
    HomeBusinessComponent,
    ContactBusinessComponent,
    FooterBusinessComponent,
    TelephoneBusinessComponent
  ]
})
export class BusinessModule { }
