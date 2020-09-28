import { NgModule } from '@angular/core';
import { RouterModule, Routes } from "@angular/router";
import { ProjectSupportComponent } from "../project-support.component";

const projectSupportRoutes: Routes = [
  {path: 'stod', component: ProjectSupportComponent}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(projectSupportRoutes)
  ],
  exports: [RouterModule]
})
export class ProjectSupportRoutesModule { }
