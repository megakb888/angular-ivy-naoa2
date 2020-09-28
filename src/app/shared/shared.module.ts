import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularMaterialModule } from "./angular-material/angular-material.module";

import { ContactFormBasicComponent } from './contact/contact-form-basic/contact-form-basic.component';
import { ContactFormBusinessComponent } from './contact/contact-form-business/contact-form-business.component';
import { CartComponent } from "./cart/cart.component";
import { CartModalComponent } from "./cart/cart-modal/cart-modal.component";
import { NavComponent } from "./nav/nav.component";
import { FooterComponent } from "./footer/footer.component";
import { OpentimesComponent } from "./opentimes/opentimes.component";
import { SitemapComponent } from './sitemap/sitemap.component';
import { LoginComponent } from './login/login.component';
import { CookiesComponent } from './cookies/cookies.component';
import { AboutComponent } from './about/about.component';
import { WebsiteComponent } from './website/website.component';

@NgModule({
  declarations: [
    ContactFormBasicComponent,
    ContactFormBusinessComponent,
    CartComponent,
    CartModalComponent,
    NavComponent,
    FooterComponent,
    OpentimesComponent,
    SitemapComponent,
    LoginComponent,
    CookiesComponent,
    AboutComponent,
    WebsiteComponent
  ],
  imports: [
    NgbModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule
  ],
  exports: [
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    AngularMaterialModule,
    ContactFormBasicComponent,
    ContactFormBusinessComponent,
    CartComponent,
    CartModalComponent,
    NavComponent,
    FooterComponent,
    OpentimesComponent,
    CookiesComponent,
    AboutComponent
  ]
})
export class SharedModule { }
