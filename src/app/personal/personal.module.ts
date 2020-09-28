import { NgModule } from '@angular/core';
import { CitynetsModule } from "./citynets/citynets.module";
import { TeleModule } from "./tele/tele.module";
import { XdslComponent } from './xdsl/xdsl.component';
import { StoreModule } from "./store/store.module";
import { EsetModule } from "./eset/eset.module";
import { SupportModule } from "./support/support.module";
import { DriftinfoModule } from "../shared/driftinfo/driftinfo.module";
import { PricelistsModule } from "./pricelists/pricelists.module";
import { SharedModule } from "../shared/shared.module";

import { PersonalComponent } from "./personal.component";
import { NavPersonalComponent } from "./core/nav-personal/nav-personal.component";
import { HomePersonalComponent } from "./home-personal/home-personal.component";
import { ContactPersonalComponent } from "./contact/contact.component";
import { FooterPersonalComponent } from "./core/footer-personal/footer-personal.component";



@NgModule({
  declarations: [
    PersonalComponent,
    NavPersonalComponent,
    HomePersonalComponent,
    ContactPersonalComponent,
    FooterPersonalComponent,
    XdslComponent
  ],
  imports: [
    CitynetsModule,
    TeleModule,
    StoreModule,
    EsetModule,
    SupportModule,
    DriftinfoModule,
    PricelistsModule,
    SharedModule
  ]
})
export class PersonalModule { }
