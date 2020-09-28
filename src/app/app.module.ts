import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";

import { BusinessModule } from "./business/business.module";
import { PersonalModule } from "./personal/personal.module";
import { PropertyModule } from "./property/property.module";

import { NewsModule } from "./shared/news/news.module";
import { CoverageMapModule } from "./shared/coverage-map/coverage-map.module";
import { GdprModule } from "./shared/gdpr/gdpr.module";
import { JobsModule } from "./shared/jobs/jobs.module";
import { ProjectSupportModule } from "./shared/project-support/project-support.module";
import { RouterModule } from '@angular/router';
import { RoutesModule } from "./routing/routes.module";

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    BusinessModule,
    PersonalModule,
    PropertyModule,
    NewsModule,
    CoverageMapModule,
    GdprModule,
    JobsModule,
    ProjectSupportModule,
    RouterModule,
    RoutesModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
