import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { SharedModule } from "../../shared/shared.module";

import { SupportComponent } from './support.component';
import { BroadbandComponent } from './broadband/broadband.component';
import { TeleSupportComponent } from './tele/tele-support.component';
import { MailComponent } from './mail/mail.component';
import { BusinessComponent } from './business/business.component';
import { OtherComponent } from './other/other.component';
import { EconomyComponent } from './economy/economy.component';

import { SupportContactWidgetComponent } from "./shared/support-contact-widget/support-contact-widget.component";
import { SupportHomeComponent } from './support-home/support-home.component';
import { MailSettingsComponent } from './mail/mail-settings/mail-settings.component';
import { MailApplemailComponent } from './mail/mail-applemail/mail-applemail.component';
import { MailThunderbirdComponent } from './mail/mail-thunderbird/mail-thunderbird.component';
import { MailWindowsliveComponent } from './mail/mail-windowslive/mail-windowslive.component';
import { MailWindows10Component } from './mail/mail-windows10/mail-windows10.component';
import { BusinessContractComponent } from './business/business-contract/business-contract.component';
import { BusinessDeliveryComponent } from './business/business-delivery/business-delivery.component';
import { BusinessInvoiceComponent } from './business/business-invoice/business-invoice.component';
import { BusinessErrorReportComponent } from './business/business-error-report/business-error-report.component';

@NgModule({
  declarations: [
    SupportComponent,
    BroadbandComponent,
    TeleSupportComponent,
    MailComponent,
    BusinessComponent,
    OtherComponent,
    EconomyComponent,
    SupportContactWidgetComponent,
    SupportHomeComponent,
    MailSettingsComponent,
    MailApplemailComponent,
    MailThunderbirdComponent,
    MailWindowsliveComponent,
    MailWindows10Component,
    BusinessContractComponent,
    BusinessDeliveryComponent,
    BusinessInvoiceComponent,
    BusinessErrorReportComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule
  ],
  exports: [RouterModule]
})
export class SupportModule { }
