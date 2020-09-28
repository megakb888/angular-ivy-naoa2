import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { NewsComponent } from "../news.component";

const newsRoutes: Routes = [
  {path: 'nyheter', component: NewsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(newsRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class NewsRoutesModule { }
