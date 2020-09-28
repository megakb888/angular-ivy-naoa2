import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { JobsComponent } from "../jobs.component";

const jobsRoutes: Routes = [
  {path: 'tjanster', component: JobsComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(jobsRoutes)
  ],
  exports: [RouterModule]
})
export class JobsRoutesModule { }
