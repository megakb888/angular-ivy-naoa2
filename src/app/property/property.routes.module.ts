import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { PropertyComponent } from './property.component';
import { HomePropertyComponent } from './home-property/home-property.component';
import { TvPropertyComponent } from './tv-property/tv-property.component';
import { FiberPropertyComponent } from './fiber-property/fiber-property.component';
import { TelePropertyComponent } from './tele-property/tele-property.component';
import { ContactComponent } from './contact/contact.component';

const propertyRoutes: Routes = [
  {
    path: 'fastighet', component: PropertyComponent, children: [
      { path: 'home', component: HomePropertyComponent },
      { path: 'tv', component: TvPropertyComponent },
      { path: 'fiber', component: FiberPropertyComponent },
      { path: 'telefoni', component: TelePropertyComponent },
      { path: 'kontakt', component: ContactComponent },
      { path: '**', redirectTo: 'home' }
    ]
  }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(propertyRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class PropertyRoutesModule { }
