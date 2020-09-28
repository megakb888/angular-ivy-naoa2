import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PersonalComponent } from "./personal.component";
import { EsetComponent } from "./eset/eset.component";
import { JobsComponent } from "../shared/jobs/jobs.component";
import { XdslComponent } from "./xdsl/xdsl.component";
import { SupportComponent } from "./support/support.component";
import { CitynetsComponent } from "./citynets/citynets.component";
import { NewsComponent } from "../shared/news/news.component";
import { HomePersonalComponent } from "./home-personal/home-personal.component";
import { CitynetComponent } from "./citynets/citynet/citynet.component";
import { CitynetListComponent } from "./citynets/citynet-list/citynet-list.component";
import { SupportHomeComponent } from "./support/support-home/support-home.component";
import { BroadbandComponent } from "./support/broadband/broadband.component";
import { TeleSupportComponent } from "./support/tele/tele-support.component";
import { EconomyComponent } from "./support/economy/economy.component";
import { MailComponent } from "./support/mail/mail.component";
import { MailSettingsComponent } from "./support/mail/mail-settings/mail-settings.component";
import { MailApplemailComponent } from "./support/mail/mail-applemail/mail-applemail.component";
import { MailThunderbirdComponent } from "./support/mail/mail-thunderbird/mail-thunderbird.component";
import { MailWindowsliveComponent } from "./support/mail/mail-windowslive/mail-windowslive.component";
import { MailWindows10Component } from "./support/mail/mail-windows10/mail-windows10.component";
import { BusinessComponent } from "./support/business/business.component";
import { BusinessContractComponent } from "./support/business/business-contract/business-contract.component";
import { BusinessDeliveryComponent } from "./support/business/business-delivery/business-delivery.component";
import { BusinessInvoiceComponent } from "./support/business/business-invoice/business-invoice.component";
import { BusinessErrorReportComponent } from "./support/business/business-error-report/business-error-report.component";
import { OtherComponent } from "./support/other/other.component";
import { StoreComponent } from "./store/store.component";
import { ProductComponent } from "./store/product/product.component";
import { CheckoutComponent } from "./store/checkout/checkout.component";
import { ProductListComponent } from "./store/product-list/product-list.component";
import { TeleComponent } from "./tele/tele.component";
import { DriftinfoComponent } from '../shared/driftinfo/driftinfo.component';
import { SitemapComponent } from '../shared/sitemap/sitemap.component';
import { LoginComponent } from '../shared/login/login.component';
import { CookiesComponent } from '../shared/cookies/cookies.component';
import { AboutComponent } from '../shared/about/about.component';
import { ContactPersonalComponent } from './contact/contact.component';
import { WebsiteComponent } from '../shared/website/website.component';
import { GdprComponent } from '../shared/gdpr/gdpr.component';
import { PricelistsComponent } from './pricelists/pricelists.component';


const supportRoutes: Routes = [
  {path: '', component: SupportHomeComponent},
  {path: 'bredband', component: BroadbandComponent},
  {path: 'ekonomi', component: EconomyComponent},
  {
    path: 'epost',
    component: MailComponent,
    children: [
      {path: 'applemail', component: MailApplemailComponent},
      {path: 'installningar', component: MailSettingsComponent},
      {path: 'thunderbird', component: MailThunderbirdComponent},
      {path: 'windows10', component: MailWindows10Component},
      {path: 'windowslive', component: MailWindowsliveComponent}
    ]
  },
  {
    path: 'foretag',
    component: BusinessComponent,
    children: [
      {path: 'avtal', component: BusinessContractComponent},
      {path: 'faktura', component: BusinessInvoiceComponent},
      {path: 'felanmalan', component: BusinessErrorReportComponent},
      {path: 'leverans', component: BusinessDeliveryComponent}
    ]
  },
  {path: 'ovrigt', component: OtherComponent},
  {path: 'telefoni', component: TeleSupportComponent}
];

const personalRoutes: Routes = [
  {
    path: '', component: PersonalComponent, children: [
      { path: 'xdsl', component: XdslComponent },
      { path: 'bredband', redirectTo: 'stadsnat' },
      {
        path: 'butik', component: StoreComponent,
        children: [
          { path: ':id', component: ProductComponent },
          { path: '', component: ProductListComponent }
        ]
      },
      { path: 'eset', component: EsetComponent },
      { path: 'omoss', component: AboutComponent },
      { path: 'home', component: HomePersonalComponent},
      { path: 'kassa', component: CheckoutComponent },
      { path: 'kontakt', component: ContactPersonalComponent },
      { path: 'website', component: WebsiteComponent},
      { path: 'nyheter', component: NewsComponent },
      { path: 'gdpr', component: GdprComponent },
      { path: 'faq/prislistor', component: PricelistsComponent },
      { path: 'sakerhetspaket', component: EsetComponent },
      {
        path: 'stadsnat', component: CitynetsComponent,
        children: [
          { path: ':namn', component: CitynetComponent },
          { path: '', component: CitynetListComponent }
        ]
      },
      {
        path: 'support', component: SupportComponent,
        children: supportRoutes
      },
      { path: 'telefoni', component: TeleComponent },
      { path: 'tjanster', component: JobsComponent },
      { path: 'driftinfo', component: DriftinfoComponent },
      { path: 'sitemap', component: SitemapComponent },
      { path: 'login', component: LoginComponent },
      { path: 'cookies', component: CookiesComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }

];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(personalRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PersonalRoutesModule { }
