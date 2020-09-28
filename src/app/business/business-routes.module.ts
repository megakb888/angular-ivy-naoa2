import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { BusinessComponent } from "./business.component";
import { HomeBusinessComponent } from "./home-business/home-business.component";
import { ContactBusinessComponent } from "./contact/contact.component";
import { JobsComponent } from "../shared/jobs/jobs.component";
import { TelephoneBusinessComponent } from './telephone-business/telephone-business.component';
import { DriftinfoComponent } from '../shared/driftinfo/driftinfo.component';
import { InternetComponent } from './internet/internet.component';
import { IotComponent } from './iot/iot.component';
import { WifiComponent } from './wifi/wifi.component';
import { ServerComponent } from './server/server.component';

const businessRoutes: Routes = [
  {
    path: 'foretag', component: BusinessComponent, children: [
      { path: 'home', component: HomeBusinessComponent },
      { path: 'kontakt', component: ContactBusinessComponent },
      { path: 'tjanster', component: JobsComponent },
      { path: 'telebusiness', component: TelephoneBusinessComponent },
      { path: 'internet', component: InternetComponent },
      { path: 'driftinfo', component: DriftinfoComponent },
      { path: 'iot', component: IotComponent },
      { path: 'wifi', component: WifiComponent },
      { path: 'server', component: ServerComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(businessRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BusinessRoutesModule { }
